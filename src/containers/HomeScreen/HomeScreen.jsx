import React from 'react';
import { Link } from 'react-router-dom';

function HomeScreen() {
  return (
    <div>
      <h1>Welcome to Home!</h1>
      <Link to="/profile">click to move profile</Link>
    </div>
  );
}

export default HomeScreen;
