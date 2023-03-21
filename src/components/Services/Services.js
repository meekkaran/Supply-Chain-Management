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
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

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
              <div className="sectors">
                <img src={image1} component="img" alt="card-img" /> 
                <h5>Fast-moving Consumer goods</h5>
                <p>We offer a high level of fast moving consumer goods to our clients, every step of the way.</p>
              </div>
            </Col>
            <Col md={4} className="services-sector">
              <div className="sectors">
              <img src={image1} component="img" alt="card-img" /> 
                <h5>Retail</h5>
                <p>With our accurate logistic solutions, we create value all the way from supply chain management to slaed</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="services-sector">
              <div className="sectors">
                <img src={image1} component="img" alt="card-img" /> 
                <h5>Technology and IT</h5>
                <p>We help you build your solution around enables that produce high quality results</p>
              </div>
            </Col>
            <Col md={4} className="services-sector">
              <div className="sectors">
                <img src={image1} component="img" alt="card-img" /> 
                <h5>Autoparts and Accessories Manufacturing</h5>
                <p>We offer high quality products and solutions across automotive field.</p>
              </div>
            </Col>
            <Col md={4} className="services-sector">
              <div className="sectors">
                <img src={image1} component="img" alt="card-img" /> 
                <h5>Car, Automobile and Automation </h5>
                <p>Arabian Sourcing offerS high quality products and solutions across the automotive field.</p>
              </div>
            </Col>
          </Row>
        </Container>
        

        {/* #types of services offered */}
        <Container className="services-section-2">
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

        {/* services final content */}
      <Container>
      <Row>
          <Col md={4} className="home-card">
            <Card className="home-card-view">
              <Card.Body>
                <WbSunnyIcon className="icon-colour" style={{ fontSize: "40px" }}/>
                <Card.Title>Ready to ship? </Card.Title>
                <Card.Text >
                  <p>Ask for quotation and get good rates.</p>
                </Card.Text>
                <Button className="btn" href="/about" target="_blank">Get Started</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="home-card">
            <Card className="home-card-view">
              <Card.Body>
                <MapsUgcIcon className="icon-colour" style={{ fontSize: "40px" }}/>
                <Card.Title>Need Help?</Card.Title>
                <Card.Text >
                  <p>Need advice? Any Questions? Comments?</p>
                </Card.Text>
                <Button className="btn" href="/contact" target="_blank">Reach out to us</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="home-card">
            <Card className="home-card-view">
              <Card.Body>
                <MapsUgcIcon className="icon-colour" style={{ fontSize: "40px" }}/>
                <Card.Title>Other services enquiries?</Card.Title>
                <Card.Text >
                  <p>Contact us and we will respond within the next two working days.</p>
                </Card.Text>
                <Button className="btn" href="/contact" target="_blank">Enquire</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      </Container>
    </section>
  );
}

export default Services