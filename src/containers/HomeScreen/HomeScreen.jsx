import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RootContext } from '../../contexts/RootContext';

function HomeScreen() {
  const rootContext = useContext(RootContext);
  //checking if user is available
  const user = rootContext.user;
  console.log(user, 'from home');
  return (
    <div>
      <h1>Welcome to Home!</h1>
      <Link to="/profile">click to move profile</Link>
    </div>
  );
}

export default HomeScreen;
