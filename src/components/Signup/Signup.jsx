import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../shared/Loginsignup.css';

export default function Signup() {
  const [userName, setUsername] = useState('');

  const onUserNameChange = (event) => {
    console.log(event.target.value);
    setUsername(event.target.value);
  };
  const onPasswordChange = (event) => {
    console.log(event.target.value);
  };
  const onEmailChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="login-div">
      <div className="sub-login-div">
        <h2>Sign Up</h2>
        <hr />
        <span> User ID </span>
        <input type="text" onChange={onUserNameChange} value={userName} />
        <br />
        <br />
        <span> Password </span>
        <input type="password" onChange={onPasswordChange} />
        <br />
        <br />
        <span> Email </span>
        <input type="text" onChange={onEmailChange} />
        <br />
        <br />
        <Button className="success">Sign Up</Button>
        <Link to="/login">Already Signed? Login</Link>
      </div>
    </div>
  );
}
