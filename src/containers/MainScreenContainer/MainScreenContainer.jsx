import React from 'react';
import { useLocation } from 'react-router-dom';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import HomeScreen from '../HomeScreen/HomeScreen';

function MainScreenContainer() {
  const urlName = useLocation();
  const path = urlName.pathname;
  function setContainer() {
    if (path === '/home') return <HomeScreen />;
    if (path === '/profile') return <ProfileScreen />;
    return '';
  }
  return <div>{setContainer()}</div>;
}

export default MainScreenContainer;
