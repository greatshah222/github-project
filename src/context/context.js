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
  return (
    <GitHubContext.Provider
      value={{
        gitHubFollowers,
        gitHubUser,
        gitHubRepos,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

export default GitHubProvider;
