import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
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
      </div>
    </div>
    // <Form>
    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>Email address</Form.Label>
    //     <Form.Control type="email" placeholder="Enter email" />
    //     <Form.Text className="text-muted">
    //       We will never share your email with anyone else.
    //     </Form.Text>
    //   </Form.Group>
    //   <Form.Group className="mb-3" controlId="formBasicPassword">
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control type="password" placeholder="Password" />
    //   </Form.Group>
    //   <Form.Group className="mb-3" controlId="formBasicCheckbox">
    //     <Form.Check type="checkbox" label="Check me out" />
    //   </Form.Group>
    // </Form>
  );
}
