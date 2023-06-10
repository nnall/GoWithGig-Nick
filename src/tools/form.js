import React, { useState } from 'react'; // useState imported from React
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown'; // Corrected import

const BasicExample = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (e) => {
    setSelectedOption(e);
  }
  
  return (
    <Form>
      <Form.Group className="mb-3" controlId="location">
        <Form.Label>Choose a location closest to you.</Form.Label>

        <Dropdown onSelect={handleSelect}>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            {selectedOption || 'Choose a location'}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="Location 1">Birmingham, Al</Dropdown.Item>
            <Dropdown.Item eventKey="Location 2">Montgomery, Al</Dropdown.Item>
            <Dropdown.Item eventKey="Location 3">Douglasville, Ga</Dropdown.Item>
			<Dropdown.Item eventKey="Location 3">Diberville, Ms</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Form.Text className="text-muted">
          We'll never share your location with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BasicExample;
