import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contact = () => {
	return (
    	<div className="mx-auto">
			<Row>
				<Col xs={12} md={6}>
					<h3 className="fw-bold text-center mt-5">Douglasville, Georgia</h3>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.4461791933977!2d-84.77477362299322!3d33.7232768732827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5292401ba9691%3A0x1d93fab308b8655!2sHolmes%20Motors%20Douglasville!5e0!3m2!1sen!2sus!4v1685664034843!5m2!1sen!2sus"
						width="100%"
						height="450"
						style={{ border: '0' }}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</Col>
				<Col xs={12} md={6}>
					<h3 className="fw-bold text-center mt-5">Taylorsville, Utah</h3>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56775.88219481939!2d-111.99215641885945!3d40.68346242174706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528b77c126a237%3A0x4487fa836aa68c97!2sMarkosian%20Auto!5e0!3m2!1sen!2sus!4v1685664791845!5m2!1sen!2sus"
						width="100%"
						height="450"
						style={{ border: '0' }}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</Col>
			</Row>
    	</div>
	);
};

export default Contact;
