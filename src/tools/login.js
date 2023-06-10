import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import google from '../images/google_dark.png';

function LoginForm() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Submitted!');
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = () => {
    setShowModal(true);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open Login Modal
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
		<Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
			<img src={google} alt="Google" style={{ width: '75px', height: '75px' }} />
            <Button variant="primary" type="submit" block>
              Sign In
            </Button>
			</Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginForm;
