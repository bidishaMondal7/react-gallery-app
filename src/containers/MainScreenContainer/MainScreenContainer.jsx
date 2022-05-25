import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import HomeScreen from '../HomeScreen/HomeScreen';
import { RootContext } from '../../contexts/RootContext';
import _ from 'lodash';

function MainScreenContainer() {
  const navigate = useNavigate();
  const urlName = useLocation();
  const path = urlName.pathname;

  const rootContext = useContext(RootContext);
  //checking if user is available
  const user = rootContext.user;

  if (_.isEmpty(user)) {
    navigate('/login');
  }

  const getComponent = () => {
    if (path === '/home') return <HomeScreen />;
    if (path === '/profile') return <ProfileScreen />;
    return null;
  };
  return <div>{getComponent()}</div>;
}

export default MainScreenContainer;
