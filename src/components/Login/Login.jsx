import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../apis/auth';
import { RootContext } from '../../contexts/RootContext';
import Button from '../shared/Button/Button';

export default function Login() {
  const rootContext = useContext(RootContext);
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const onUserEmailChange = (event) => {
    setUserEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setUserPassword(event.target.value);
  };
  const onClicklogin = async () => {
    try {
      const userCredential = await login(userEmail, userPassword);
      console.log(userCredential);
      rootContext.setUser(userCredential); //updating state of RootContext
      navigate('/home');
    } catch (error) {
      console.error(error);
    }
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
        <Button onClick={onClicklogin} buttonName="Login" />
        <br />
        <br />
        <Link to="/signup">New User? Please sign up</Link>
      </div>
    </div>
  );
}
