import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../config/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Signup() {
  const navigate = useNavigate();
  const [userPassword, setPassword] = useState('');
  const [userEmail, setEmail] = useState('');
  const onPasswordChange = (event) => {
    // console.log(event.target.value);
    setPassword(event.target.value);
  };
  const onEmailChange = (event) => {
    // console.log(event.target.value);
    setEmail(event.target.value);
  };
  const onButtonClick = () => {
    console.log('Email :', userEmail, 'Password:', userPassword);
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate(`/login`);
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
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
