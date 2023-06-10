import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import couple from '../images/card1.png';
import phone from '../images/phone.png';

function CardHome() {
  return (
    <Row xs={1} md={3} className="g-4 d-flex justify-content-center align-items-center">
      {Array.from({ length: 2 }).map((_, idx) => (
        <Col key={idx}>
          <Card className='mt-5'>
            <Card.Img className="width: 100" variant="top" src={idx === 0 ? couple : phone} />
            <Card.Body>
              <Card.Title className="text-center">
			  	  {idx === 0 ? 
				  'Find The Right Ride.'
				  :
				  'Gig Something Here'
			  	  }
			  </Card.Title>
              <Card.Text className="text-center">
                {idx === 0 ? 
                'A vehicle for everyone of your gig customers' 
                : 
                'More GIG Economy Stuff Here.'
				}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CardHome;
