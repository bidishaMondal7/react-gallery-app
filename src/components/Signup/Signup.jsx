import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../../apis/auth';

export default function Signup() {
  const navigate = useNavigate();
  const [userPassword, setPassword] = useState('');
  const [userEmail, setEmail] = useState('');
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onButtonClick = () => {
    console.log('Email :', userEmail, 'Password:', userPassword);
    signup(userEmail, userPassword)
      .then((userCredential) => {
        console.log(userCredential);
        navigate('/login');
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="login-div">
      <div className="sub-login-div">
        <h2>Sign Up</h2>
        <hr />
        <span> Email </span>
        <input type="text" onChange={onEmailChange} />
        <br />
        <br />
        <span> Password </span>
        <input type="password" onChange={onPasswordChange} />
        <br />
        <br />
        <button className="success" onClick={onButtonClick}>
          Sign Up
        </button>
        <Link to="/login">Already Signed? Login</Link>
      </div>
    </div>
  );
}
