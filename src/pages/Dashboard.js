import React, { useContext } from 'react';
import { Info, Repos, User, Search } from '../components';
import { GitHubContext } from '../context/context';
// make it gif to work
import loadingImage from '../images/preloader.gif';

const Dashboard = () => {
  const { loading } = useContext(GitHubContext);
  if (loading) {
    return (
      <main>
        <Search />
        <img src={loadingImage} alt='imageLoading' className='loading-img' />
      </main>
    );
  }
  return (
    <main>
      {/* <Navbar></Navbar> */}
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
