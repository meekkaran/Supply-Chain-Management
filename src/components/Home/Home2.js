import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { 
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import FindInPageIcon from '@mui/icons-material/FindInPage';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import Button from "react-bootstrap/Button";
import supplychain from "../../Assets/supplychain.png";
import RateReviewIcon from '@mui/icons-material/RateReview';
import SourceIcon from '@mui/icons-material/Source';
import FactoryIcon from '@mui/icons-material/Factory';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import FlightIcon from '@mui/icons-material/Flight';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <h1 style={{ textAlign: "center" }}>How We Work</h1>
          <Col md={3} className="home-about-description">
            <div className="">
              <FindInPageIcon className="icon-colour" style={{ fontSize: "40px" }}/>
              <h3>Choose A service</h3>
              <p>Select the best supply method that best meets your budget and needs</p>
            </div>
          </Col>
          <Col md={3} className="home-about-description">
            <div className="">
              <RequestQuoteIcon className="icon-colour" style={{ fontSize: "40px" }}/>
              <h3>Get A Quote</h3>
              <p>Select the best supply method that best meets your budget and needs</p>
            </div>
          </Col>
          <Col md={3} className="home-about-description">
            <div className="">
              <FollowTheSignsIcon className="icon-colour" style={{ fontSize: "40px" }}/>
              <h3>Track Your Product</h3>
              <p>Select the best supply method that best meets your budget and needs</p>
            </div>
          </Col>
          <Col md={3} className="home-about-description">
            <div className="">
              <AddReactionIcon className="icon-colour" style={{ fontSize: "40px" }}/>
              <h3>Receive Your Package</h3>
              <p>Get your package delivered fully.</p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="home-about-section">
        <h1>Arabian Sourcing is much more than a Supply chain</h1>
        <img src={supplychain} className="home-about-img"/>
        <Row>
          <Col md={4} className="home-card">
            <Card className="home-card-view">
              <Card.Body>
                <RateReviewIcon />
                <Card.Title>Planning </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="home-card">
            <Card className="home-card-view">
              <Card.Body>
                <SourceIcon/>
                <Card.Title>Sourcing</Card.Title>
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
                <FactoryIcon/>
                <Card.Title>Manufacturing </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
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
      </Container>


    </Container>
  );
}
export default Home2;
