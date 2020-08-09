import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
// make it gif to work
// import loadingImage from '../images/preloader.gi';
import { GithubContext } from '../context/context';
const Dashboard = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
