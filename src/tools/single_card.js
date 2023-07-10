import { Card, Row, Col } from "react-bootstrap";
import couple from "../images/app.png";
import other from "../images/card1.png";

function CardHome() {
  return (
    <Row className="cardHome mt-5">
      <Col xs={12} md={6}>
        <Card className="mx-auto rounded-pill border-0">
          <Card.Img
            className="image-fluid border border-white"
            style={{ width: "100%", height: "400px", objectFit: "contain" }}
            variant="top"
            src={couple}
          />
          <Card.Body>
            <Card.Title className="text-center">Gig Something Here</Card.Title>
            <Card.Text className="text-center">
              More GIG Economy Stuff Here.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={6}>
        <Card className="mx-auto rounded-pill border-0">
          <Card.Img
            className="image-fluid border border-white"
            style={{ width: "100%", height: "400px", objectFit: "contain" }}
            variant="top"
            src={other}
          />
          <Card.Body>
            <Card.Title className="text-center">Gig Something Here</Card.Title>
            <Card.Text className="text-center">
              More GIG Economy Stuff Here.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default CardHome;
