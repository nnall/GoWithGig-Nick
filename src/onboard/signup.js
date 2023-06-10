import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import HeroImage from "../tools/hero";
import CardHome from "../tools/single_card";
import ReviewCard from "../tools/reviews";
import Navtop from "../tools/navbar";
import Footer from "../tools/footer";
import Contact from "../tools/contactus";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Card>
      <Card.Body className="bg-muted">
        <Form>
          <h1 className="text-center">
            Create Your Account To Rent Your Ride Today!
          </h1>
          <Row>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <div className="position-relative">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                />
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  className="position-absolute top-50 end-0 translate-middle-y"
                  onClick={togglePasswordVisibility}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </Form.Group>
            <Col>
              <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="textbox" placeholder="First Name" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="textbox" placeholder="Last Name" />
              </Form.Group>
            </Col>
            <Form.Group className="mb-3" controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="textbox" placeholder="Phone Number" />
            </Form.Group>
          </Row>
          <div className="d-grid gap-2 mb-5">
            <Button variant="success" size="lg" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Signup;
