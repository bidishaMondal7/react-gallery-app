import React from 'react';
// import { Form } from 'react-bootstrap';
import './Login.css';
export default function Login() {
  return (
    <div className="login-div">
      <span>User ID</span>
      <input type="text" name="user-id" />
      <br />
      <span>Password</span>
      <input type="password" name="user-id" />
      <br />
      <button>Login</button>
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
