import React from "react";
import { Container, Row, Col, Card, ButtonGroup } from "react-bootstrap";
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
import homeLogo from "../../Assets/air4.jpg";

function Home2() {
  return (
    <Container fluid className="home-about-section">
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

      <Container className="home-about">
        <h1>Arabian Sourcing is much more than a Supply chain</h1>
        <img src={supplychain} className="home-about-img"/>
        <div className="home-products">
          <h2>Our Products & Solutions</h2>
          <p>ASL has a wide range of products and solutions to meet your logistics requirements – 
            everything from <bold>simple shipping and transportation</bold> to <bold>supply chain consultancy </bold>to 
            transformative solutions that span the supply chain.</p>
            <div className="home-products-btn">
              <a href="/about"><Button className="btn">Learn More About Us</Button></a>
              <a href="/services"><Button className="btn">See our products and solutions</Button></a>
            </div>
        </div>
      </Container>

      {/* cards section showing the process */}
      {/* <Container>
        <Row>
          <Col md={4} className="home-card">
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

      {/* #the four steps */}
      <Container className="home-steps">
        <Row>
          <Col md={12} className="">
            <div className="card">
              
              <div>
                  <h3>PLANNING</h3>
                  <p>We help you accurately plan the journey of your items upto delivery. This helps streamline operations, 
                    enhance efficiency, avoid delays and bring down operating costs. <br/>
                    Our planning strategies have proven to reduce costs associated with several processes, including purchasing, 
                    production, inventory management and logistics by 40%. 
                  </p>
              </div>
              <img src={homeLogo} alt=""/>
          </div>
          </Col>
          <Col md={12} className="">
            <div className="card">
              <img src={homeLogo} alt=""/>
              <div>
                  <h3>SOURCING</h3>
                  <p>ASL helps businesses and  established companies find and manage the most reliable & qualified overseas suppliers 
                    for their core products.<br/><br/>
                    This means that dealing with the suppliers is Fully on our end and any uncertainities on the supply side is fully taken care of.
                  </p>
              </div>
              
          </div>
          </Col>
          <Col md={12} className="">
            <div className="card">
              
              <div>
                  <h3>PACKAGING</h3>
                  <p> - We Organize your products well.<br/> - Measure them to make sure you get the desired ordered quantity/size. <br/>
                     - Select the best products for our customers making sure they are sealed and protected.<br/>
                    This protects products from damage and allows for their efficient distribution
                  </p>
              </div>
              <img src={homeLogo} alt=""/>
          </div>
          </Col>
          <Col md={12} className="">
            <div className="card">
              <img src={homeLogo} alt=""/>
              <div>
                  <h3>DELIVERY</h3>
                  <p>We make sure we get our customers what they need—in the right amount and at the right time
                  </p>
              </div>
              
          </div>
          </Col>
        </Row>
      </Container>

    </Container>
  );
}
export default Home2;
