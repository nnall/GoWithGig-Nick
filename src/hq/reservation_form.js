import React from 'react';
import CardHome from '../tools/single_card';
import ReviewCard from '../tools/reviews';
import Contact from '../tools/contactus';
import Footer from '../tools/footer';
import Navtop from "../tools/navbar";
import { Card } from 'react-bootstrap';
import HeroImage from '../tools/hero';

const ReservationForm = () => (
  <div>
  	<Navtop />
	<HeroImage />
	<div id="signup"
                style={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100%' }}
                className='text-center bg-image d-flex justify-content-end align-items-center p-5'>
	<Card className='col-sm-6 border-2 border-success' >
		<Card.Body>
		    <iframe
		      src="https://holmes-motors.us5.hqrentals.app/public/car-rental/reservations/step1?new=1&brand=pqmuj5ml-eu8h-mvmm-dptn-wwzmqi6cgxiq"
		      width="100%"
		      height="600px"
		      style={{ border: 0 }}
		      title="Reservation Form"
		    />
		</Card.Body>
        </Card>
	</div>
    <CardHome />
    <h2 className="text-center mt-0">See What Everyone Is Saying</h2>
    <ReviewCard />
    <Contact />
    <Footer />
  </div>
);

export default ReservationForm;
