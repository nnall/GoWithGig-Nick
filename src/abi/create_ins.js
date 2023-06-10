import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';

const BasicExample = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    licenseState: '',
    licenseNumber: '',
    phoneNumber: '',
    emailAddress: '',
    dob: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  });

  const handleSelect = (e) => {
    setSelectedOption(e);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://cors-anywhere.herokuapp.com/https://api.abiweb.com/customer/gowithgig/period-zero/renter/', {
      method: 'POST',
      body: JSON.stringify({
        FIRSTNAME: formData.firstName,
        LASTNAME: formData.lastName,
        LICENSESTATE: formData.licenseState,
        LICENSENUMBER: formData.licenseNumber,
        PHONENUMBER: formData.phoneNumber,
        EMAILADDRESS: formData.emailAddress,
        DOB: formData.dob,
        ADDRESSLINE1: formData.address,
        CITY: formData.city,
        STATE: formData.state,
        ZIP: formData.zipCode,
      }),
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Basic am9yZGFuaEBob2xtZXNtb3RvcnMuY29tOmRlcmpVYkFtZnVrMg==',
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <Form className="mx-auto col-sm-6" onSubmit={handleSubmit}>
      <h1 className="text-center">Create A Renter Profile For ABI Insurance</h1>
      
      <Form.Group className="mb-3" controlId="location">
        <Form.Label>Choose a location closest to you.</Form.Label>

        <Dropdown onSelect={handleSelect}>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            {selectedOption || 'Choose a location'}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="Location 1">Douglasville, GA</Dropdown.Item>
            <Dropdown.Item eventKey="Location 2">Salt Lake City, UT</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Form.Group>

      {Object.keys(formData).map((key) => (
        <Form.Group className="mb-3" controlId={key} key={key}>
          <Form.Label>{key}</Form.Label>
          <Form.Control type="text" placeholder={`Enter ${key}`} onChange={handleChange} />
        </Form.Group>
      ))}

      <div className="d-grid gap-2 mb-5">
        <Button variant="success" size="lg" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default BasicExample;
