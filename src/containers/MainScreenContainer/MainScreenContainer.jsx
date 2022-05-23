import React from 'react';
import { useLocation } from 'react-router-dom';
import Profile from '../ProfileScreen/ProfileScreen';
import HomeScreen from '../HomeScreen/HomeScreen';

function MainScreenContainer() {
  const urlName = useLocation();
  const path = urlName.pathname;
  function setContainer() {
    if (path === '/home') return <HomeScreen />;
    if (path === '/profile') return <Profile />;
    return '';
  }
  return <div>{setContainer()}</div>;
}

export default MainScreenContainer;
