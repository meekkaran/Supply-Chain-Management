import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./services.css";
import RateReviewIcon from '@mui/icons-material/RateReview';
import SourceIcon from '@mui/icons-material/Source';
import FactoryIcon from '@mui/icons-material/Factory';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import FlightIcon from '@mui/icons-material/Flight';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import image1 from "../../Assets/homeimg1.jpg";
import image2 from "../../Assets/homeimg2.jpg";
import image3 from "../../Assets/air3.jpg";

function Services() {
  return (
    <section>
      <Container fluid className="services-section" id="services">
        <Container>
          <h1>ASL offers a comprehensive portfolio of <br/>services <br/>
          that help companies drive more value across the enterprise.</h1>
          <Row>
            <Col md={4} className="services-sector">
              <div className="sectors">
                <img src={image1} component="img" alt="card-img" /> 
                <h5>Agricultural Products</h5>
                <p>We have specialised in the importation of all types of fresh fruits and vegetables from Kenyan farmers to the varied
                  markets of the middle east through Dubai.</p>
              </div>
            </Col>
            <Col md={4} className="services-sector">
              <img src={image1} component="img" alt="card-img" /> 
              <h5>Fast-moving Consumer goods</h5>
              <p>We offer fmcgs all step of the way.</p>
            </Col>
            <Col md={4} className="services-sector">
              <img src={image1} component="img" alt="card-img" /> 
              <h5>Retail</h5>
              <p>Even the smaller markets are involved with us</p>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="services-sector">
              <img src={image1} component="img" alt="card-img" /> 
              <h5>Technology and IT</h5>
              <p>We help you build your solution around enables that produce high quality results</p>
            </Col>
            <Col md={4} className="services-sector">
              <img src={image1} component="img" alt="card-img" /> 
              <h5>Autoparts and Accessories Manufacturing</h5>
              <p>We offer high quality products and solutions across automotive field.</p>
            </Col>
            <Col md={4} className="services-sector">
              <img src={image1} component="img" alt="card-img" /> 
              <h5>Car, Automobile and Automation </h5>
              <p>We offer high quality products and solutions across automotive field.</p>
            </Col>
          </Row>
        </Container>
        

        {/* #types of services offered */}
        <Container>
          <Row>
            <Col md={12} className="services">
              <img  src={image1} className="services-image" alt="card-img" />
              <div className="service-content">
                <h1>SOURCING</h1>
                <p> We help you choose strategically the right services and goods that a company needs to run their business 
                 including seller selection, contract negotiation and measuring the long-term performance for out suppliers.
                </p>
                <h3>Sourcing has become a commodity.We changed the game</h3>
                <Button className="service-buttons" href="#" target="_blank">
                  LEARN MORE
                </Button>
              </div>
            </Col>
          </Row>

          <Row>
          <Col md={12} className="services">
              <img src={image2} className="services-image" alt="card-img" />
              <div className="service-content">
                <h1>LOGISTICS</h1>
                <p>The process of coordinating and moving resources—people, materials, inventory, and equipment—from 
                  our location to your desired destination is all dealt with by us. You do not need to vworry about how and when</p>
                <h3>Sit back, relax, Get your products and services delivered</h3>
                <Button className="service-buttons" href="#" target="_blank">
                  LEARN MORE
                </Button>
              </div>
            </Col>
          </Row>

          <Row>
          <Col md={12} className="services">
              <img src={image3} className="services-image" alt="card-img" />
              <div className="service-content">
                <h1>MANAGEMENT SOFTWARE SOLUTIONS</h1>
                <p>ASL specializes in supply chain IT software and system implementation and customization.  
                  offers an end-to-end  service offering integrating consulting, software and managed services. 
                  we cooperate with solution vendors to help companies deploy and deliver software solutions.</p>
                <h3>Great Software, Happy People</h3>
                <Button className="service-buttons" href="#" target="_blank">
                  LEARN MORE
                </Button>
              </div>
            </Col>
          </Row>
        </Container>




        {/* <Container>
        <Row>
          <Col md={4} className="services-sector" className="home-card">
            <Card className="home-card-view">
              <Card.Body>
                <RateReviewIcon className="icon-colour"/>
                <Card.Title>Planning </Card.Title>
                <Card.Text >
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="home-card">
            <Card className="home-card-view">
              <Card.Body>
                <SourceIcon  className="icon-colour"/>
                <Card.Title>Sourcing</Card.Title>
                <Card.Text >
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo 
                     reprehenderit optio amet ab temporibus asperiores quasi cupiditate.Eligendi non quis Eligendi non quis exercitationem culpa nesciunt nihil autexercitationem culpa nesciunt nihil aut Voluptatum ducimus voluptates voluptas?</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="home-card">
            <Card className="home-card-view">
              <Card.Body>
                <FactoryIcon className="icon-colour"/>
                <Card.Title>Manufacturing </Card.Title>
                <Card.Text >
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil autEligendi non quis exercitationem culpa nesciunt nihil autEligendi non quis exercitationem
                     culpa nesciunt nihil autEligendi non quis exercitationem culpa nesciunt nihil autEligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={4} className="home-card">
            <Card className="home-card-view">
              
              <Card.Body>
                <Inventory2Icon  className="icon-colour"/>
                <Card.Title>Packaging </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="home-card">
            <Card className="home-card-view">
              <Card.Body>
                <FlightIcon  className="icon-colour"/>
                <Card.Title>Delivering</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo 
                     reprehenderit optio amet ab temporibus asperiores quasi cupiditate.Eligendi non quis Eligendi non quis exercitationem culpa nesciunt nihil autexercitationem culpa nesciunt nihil aut Voluptatum ducimus voluptates voluptas?</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="home-card">
            <Card className="home-card-view">
              <Card.Body>
                <KeyboardReturnIcon  className="icon-colour"/>
                <Card.Title>Returning </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil autEligendi non quis exercitationem culpa nesciunt nihil autEligendi non quis exercitationem
                     culpa nesciunt nihil autEligendi non quis exercitationem culpa nesciunt nihil autEligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container> */}
      </Container>
    </section>
  );
}

export default Services