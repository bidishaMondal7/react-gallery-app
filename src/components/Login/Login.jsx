import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import LoginSignupContainer from './containers/LoginSignupContainer/LoginSignupContainer';

import './Login.css';

export default function Login() {
  const [userName, setUsername] = useState('');
  const onUserNameChange = (event) => {
    console.log(event.target.value);
    setUsername(event.target.value);
  };
  const onPasswordChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="login-div">
      <div className="sub-login-div">
        <h2>Login</h2>
        <hr />
        <span> User ID </span>
        <input type="text" onChange={onUserNameChange} value={userName} />
        <br />
        <br />
        <span> Password </span>
        <input type="password" onChange={onPasswordChange} />
        <br />
        <br />
        <Button className="success">Login</Button>
        <Link to="/signup">New User? Please sign up</Link>
        <br></br>
      </div>
    </div>
  );
}
