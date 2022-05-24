import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signup, updateUserProfile } from '../../apis/auth';
import Button from '../shared/Button/Button';

export default function Signup() {
  const navigate = useNavigate();
  const [userPassword, setPassword] = useState('');
  const [userEmail, setEmail] = useState('');
  const [name, setName] = useState('');

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onButtonClick = async () => {
    try {
      await signup(userEmail, userPassword);
      await updateUserProfile(name);
      navigate('/login');
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <div className="login-div">
      <div className="sub-login-div">
        <h2>Sign Up</h2>
        <hr />
        <span> Name </span>
        <input type="text" onChange={onNameChange} />
        <br />
        <br />
        <span> Email </span>
        <input type="text" onChange={onEmailChange} />
        <br />
        <br />
        <span> Password </span>
        <input type="password" onChange={onPasswordChange} />
        <br />
        <br />
        <Button onClick={onButtonClick} buttonName="Signup" />
        <Link to="/login">Already Signed? Login</Link>
      </div>
    </div>
  );
}
