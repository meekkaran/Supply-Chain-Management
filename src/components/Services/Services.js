import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./services.css";
import image1 from "../../Assets/homeimg1.jpg";
import image2 from "../../Assets/homeimg2.jpg";
import image3 from "../../Assets/air3.jpg";

function Services() {
  return (
    <section>
      <Container fluid className="services-section" id="services">
        <h1>What we offer</h1>
        
      </Container>
      <Container className="services">
        <Row>
          <Col md={4} className="home-card">
            <Card className="home-card-view">
              <Card.Img variant="top" src={image1} component="img" alt="card-img" />
              <Card.Body>
                <Card.Title>Loddjf </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
                </Card.Text>
                <Button className="home-buttons" href="#" target="_blank">
                  LEARN MORE
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="home-card">
            <Card className="home-card-view">
              <Card.Img variant="top" src={image2} component="img" alt="card-img" />
              <Card.Body>
                <Card.Title>Warehouse Solutions</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo 
                     reprehenderit optio amet ab temporibus asperiores quasi cupiditate.Eligendi non quis Eligendi non quis exercitationem culpa nesciunt nihil autexercitationem culpa nesciunt nihil aut Voluptatum ducimus voluptates voluptas?</p>
                </Card.Text>
                <Button  className="home-buttons" href="#">
                  LEARN MORE
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="home-card">
            <Card className="home-card-view">
              <Card.Img variant="top" src={image3} component="img" alt="card-img" />
              <Card.Body>
                <Card.Title>Transportation </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil autEligendi non quis exercitationem culpa nesciunt nihil autEligendi non quis exercitationem
                     culpa nesciunt nihil autEligendi non quis exercitationem culpa nesciunt nihil autEligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
                </Card.Text>
                <Button  className="home-buttons" href="#">
                  LEARN MORE
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>


      </Container>
    </section>
  );
}

export default Services