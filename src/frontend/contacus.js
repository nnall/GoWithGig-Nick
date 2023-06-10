import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import HeroImage from '../tools/hero';
import CardHome from '../tools/single_card';
import ReviewCard from '../tools/reviews';
import Navtop from "../tools/navbar";
import Footer from '../tools/footer';

const ContactUs = () => {
	return (
		<div style={{ position: 'relative' }}>
		<Navtop />
		<HeroImage />
			<div
				id="contactus"
				style={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100%' }}
				className='text-center bg-image d-flex justify-content-end align-items-center p-5'
			>
				<div className='col-sm-6 my-auto pt-5 mt-5'>
					<Card>
						<Card.Body className="bg-muted">
							<Form>
								<h1 className="text-center">Contact Our Support Team</h1>
								<Row>
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
								</Row>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Email address</Form.Label>
									<Form.Control type="email" placeholder="Enter email" />
									<Form.Text className="text-muted">
										We'll never share your email with anyone else.
									</Form.Text>
								</Form.Group>
								<Form.Group className="mb-3" controlId="formPhoneNumber">
									<Form.Label>Phone Number</Form.Label>
									<Form.Control type="textbox" placeholder="Phone Number" />
								</Form.Group>

								<div className="d-grid gap-2 mb-5">
									<Button variant="success" size="lg" type="submit">
										Submit
									</Button>
								</div>
							</Form>
						</Card.Body>
					</Card>
				</div>
			</div>
			<CardHome />
			<h2 className="text-center mt-5">See What Everyone Is Saying</h2>
			<ReviewCard />
			<Footer />
			</div>
	);
};

export default ContactUs;
