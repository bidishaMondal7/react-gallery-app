import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../config/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const onUserEmailChange = (event) => {
    console.log(event.target.value);
    setUserEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    console.log(event.target.value);
    setUserPassword(event.target.value);
  };
  const onClicklogin = () => {
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user, 'User Logged in');
        navigate(`/home`);
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(' user not logged in', errorMessage);
      });
  };

  return (
    <div className="login-div">
      <div className="sub-login-div">
        <h2>Login</h2>
        <hr />
        <span> User ID </span>
        <input type="text" onChange={onUserEmailChange} />
        <br />
        <br />
        <span> Password </span>
        <input type="password" onChange={onPasswordChange} />
        <br />
        <br />
        <Button className="success" onClick={onClicklogin}>
          Login
        </Button>
        <br />
        <br />
        <Link to="/signup">New User? Please sign up</Link>
      </div>
    </div>
  );
}
