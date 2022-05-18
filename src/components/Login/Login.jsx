import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../apis/auth';

export default function Login() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const onUserEmailChange = (event) => {
    setUserEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setUserPassword(event.target.value);
  };
  const onClicklogin = () => {
    login(userEmail, userPassword)
      .then((userCredential) => {
        console.log(userCredential);
        navigate('/home');
      })
      .catch((error) => console.log(error));
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
