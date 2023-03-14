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

      
      {/* cards section showing the process */}
      <Container>
      <h1 style={{ textAlign: "center" }}>How We Work</h1>
        <Row>
          <Col md={3} className="home-card">
            <Card className="home-card-view">
              <Card.Body>
                <FindInPageIcon className="icon-colour" style={{ fontSize: "40px" }}/>
                <Card.Title>Choose A service </Card.Title>
                <Card.Text >
                  <p>Select the best supply method that best meets your budget and needs</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="home-card">
            <Card className="home-card-view">
              <Card.Body>
                <RequestQuoteIcon className="icon-colour" style={{ fontSize: "40px" }}/>
                <Card.Title>Get A Quote</Card.Title>
                <Card.Text >
                  <p>Select the best supply method that best meets your budget and needs</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="home-card">
            <Card className="home-card-view">
              <Card.Body>
                <FollowTheSignsIcon className="icon-colour" style={{ fontSize: "40px" }}/>
                <Card.Title>Track your product </Card.Title>
                <Card.Text >
                  <p>Select the best supply method that best meets your budget and needs</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="home-card">
            <Card className="home-card-view">
              
              <Card.Body>
                <AddReactionIcon className="icon-colour" style={{ fontSize: "40px" }}/>
                <Card.Title>Receive your package </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  <p>Get your package delivered to you safely</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* home about section */}
      <Container className="home-about">
        <Row>
          <Col md={12}>
          <h1>Arabian Sourcing is much more than a Supply chain</h1>
          <img src={supplychain} className="home-about-img"/>
          </Col>
        </Row>

        <Row>
            <Col md={4}>
              <img src={homeLogo} alt="home pic" className="img-fluid" style={{ maxHeight: "450px" }}/>
            </Col>

            <Col md={8}>
              <Row>
              <Col md={4}>
                <div>
                  <p>Get advisory services on your products including production planning, demand estimation, procurement planning,
                     inventory management control and design</p>
                </div>
              </Col>
              <Col md={4}>
                <div>
                  <p>Get variety of services from us. From the sourcing of agricultural products to implementation and distribution of software solutions </p>
                </div>
              </Col>
              <Col md={4}>
                <div>
                  <p>Do you need supply chain IT software and system implementation and customization services? Worry no more. ASL has specialised in that</p>
                </div>
              </Col>
              </Row>

              <Row>
              <Col md={4}>
                <div>
                  <p>Ask for a quotation,Compare quotes right from your phone and If you are satisfied, simply continue to have your goods delivered.</p>
                </div></Col>
              <Col md={4}>
                <div>
                  <p>All you need to do is choose a servive that you want, and all the planning, 
                    estimation and the supply-side uncertainties and product risks are reliably taken care of by us</p>
                </div>
              </Col>
              <Col md={4}>
                <div>
                  <p>Join a community of vendors buyers and distributors just like you!</p>
                </div>
              </Col>
              </Row>
            </Col>
        </Row>
        
        {/* home-products section */}
        <Container className="home-products-section">
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

      </Container>

      

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
