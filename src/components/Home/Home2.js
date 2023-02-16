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
import image1 from "../../Assets/homeimg1.jpg";
import image2 from "../../Assets/homeimg2.jpg";
import image3 from "../../Assets/air3.jpg";


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
        <img src=""/>
        <Row>
          <h1>Arabian Sourcing is much more than a Supply chain</h1>
          <h3>Browse our plans</h3>
          <Col md={4} className="home-card">
            <Card className="home-card-view">
              <Card.Img variant="top" src={image1} component="img" alt="card-img" />
              <Card.Body>
                <Card.Title>Loddjf </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
                </Card.Text>
                <Button style={{ backgroundColor: "#d4af37"}} href="#" target="_blank">
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
                <Button variant="primary" href="#" target="_blank">
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
                <Button variant="primary" href="#" target="_blank">
                  LEARN MORE
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>


    </Container>
  );
}
export default Home2;
