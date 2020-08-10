import React, { useState, useEffect, createContext } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

export const GitHubContext = createContext();

const GitHubProvider = ({ children }) => {
  const [gitHubUser, setGitHubUser] = useState(mockUser);
  const [gitHubRepos, setGitHubRepos] = useState(mockRepos);
  const [gitHubFollowers, setGitHubFollowers] = useState(mockFollowers);
  const [requests, setRequests] = useState(0);
  const [requestsLimit, setRequestsLimit] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [errorsType, setErrorsType] = useState(null);
  // check rateLimit
  const checkRequestLimit = async () => {
    try {
      const res = await axios(`${rootUrl}/rate_limit`);
      let { remaining, limit } = res.data.rate;
      setRequests(remaining);
      setRequestsLimit(limit);
      if (remaining === 0) {
        // throw an error
        setErrors('Exceedded Hourly Limit. Please try after some time');
        setErrorsType('limit');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const clearError = () => {
    setErrors(null);
    setErrorsType(null);
  };
  const searchGitHubUser = async (user) => {
    clearError();
    setLoading(true);
    checkRequestLimit();
    try {
      const res = await axios(`${rootUrl}/users/${user}`);
      const { login } = res.data;
      setGitHubUser(res.data);
      // https://api.github.com/users/greatshah222/followers
      const resRepos = await axios(
        `${rootUrl}/users/${login}/repos?per_page=100`
      );
      await setGitHubRepos(resRepos.data);
      const resFollower = await axios(
        `${rootUrl}/users/${login}/followers?per_page=100`
      );
      await setGitHubFollowers(resFollower.data);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setErrors(error.response.data.message);
      setLoading(false);
      throw error;
    }
  };

  // this means as soon as the page runs run this function(might be useful for further projects)
  useEffect(() => {
    checkRequestLimit();
  }, []);
  return (
    <GitHubContext.Provider
      value={{
        gitHubFollowers,
        gitHubUser,
        gitHubRepos,
        requestsLimit,
        requests,
        errors,
        clearError: clearError,
        loading,
        errorsType,

        searchGitHubUser,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

export default GitHubProvider;
