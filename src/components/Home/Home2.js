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
import DoneIcon from '@mui/icons-material/Done';
import Button from "react-bootstrap/Button";
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import supplychain from "../../Assets/supplychain.png";
import homeLogo from "../../Assets/air4.jpg";
import websiteBg from "../../Assets/websiteBg.jpg";
import personPhone from "../../Assets/personPhone.jpg";
import peoplehand from "../../Assets/peoplehand.jpg";
import delivery from "../../Assets/delivery.jpg";
import packaging from "../../Assets/packaging.jpg";
import sourcing from "../../Assets/sourcing.jpg";


function Home2() {
  return (
    <Container fluid className="home-about-section">

      
      {/* cards section showing the process */}
      <Container className="header">
      <h1 style={{ textAlign: "center" }}>How We Operate</h1>
      <h4 style={{ textAlign: "center" }}>We offer you dedicated end-to-end supply chain expertise, <br/>and understand
       the challenges and specificities of your industry.</h4>
        <Row>
          <Col md={4} className="home-card">
            <Card className="home-card-view">
              <Card.Body>
                <FindInPageIcon className="icon-colour" style={{ fontSize: "40px" }}/>
                <Card.Title>Choose A service </Card.Title>
                <Card.Text >
                  <p>ASL has a wide range of products and solutions to meet your logistics requirements – 
                    everything from simple shipping and transportation to supply chain consultancy to transformative solutions 
                    that span the supply chain.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="home-card">
            <Card className="home-card-view">
              <Card.Body>
                <RequestQuoteIcon className="icon-colour" style={{ fontSize: "40px" }}/>
                <Card.Title>Get A Quote</Card.Title>
                <Card.Text >
                  <p>Estimate costs and select the best supply method that best meets your budget and needs.Simply 
                    fill out your details to receive a quote and go ahead to book and work with us.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="home-card">
            <Card className="home-card-view">
              <Card.Body>
                <AddReactionIcon className="icon-colour" style={{ fontSize: "40px" }}/>
                <Card.Title>Receive your package </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  <p>ASL ensures safe, secure, efficient and effective handling, transport, 
                    distribution, storage, retailing, consumption and recovery, reuse or disposal combined with
                     maximizing consumer value in pur packaging and delivery </p>
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
          <h5>Our simple system offers an easy supply chain management plan - each with realistic cost projection,<br/> 
              - a step by step procedure to get your items delivered safely to your door steps </h5>
          <img src={websiteBg} className="home-about-img"/>
          </Col>
        </Row>

        <Row className="home-about-row">
          <Col md={4} className="home-about-details">
            <img src={personPhone} alt="home pic"/>
          </Col>

          <Col md={8} className="home-about-details">
            <Row>
            <Col md={4}>
              <div className="details">
                <DoneIcon className="details-icon"/>
                <p className="part1">Get advisory services on your products including production planning, demand estimation, procurement planning,
                    inventory management control and design</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="details">
                <DoneIcon className="details-icon"/>
                <p>Get variety of services from us. From the sourcing of agricultural products to implementation and distribution
                   of software solutions </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="details">
                <DoneIcon className="details-icon"/>
                <p>Do you need supply chain IT software and system implementation and customization services? Worry no more.
                   ASL has specialised in that</p>
              </div>
            </Col>
            </Row>
            <Row>
            <Col md={4}>
              <div className="details">
                <DoneIcon className="details-icon"/>
                <p>Ask for a quotation, compare quotes right from your phone and If you are satisfied, simply continue to have your
                   goods delivered.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="details">
                <DoneIcon className="details-icon"/>
                <p>All you need to do is choose a servive that you want. all the planning, 
                  estimation, supply-side uncertainties and product risks are reliably taken care of by us</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="details">
                <DoneIcon className="details-icon"/>
                <p>Join a community of vendors buyers and distributors just like you!</p>
              </div>
            </Col>
            </Row>
          </Col>
        </Row>

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
              <img src={peoplehand} alt=""/>
          </div>
          </Col>
          <Col md={12} className="">
            <div className="card">
              <img src={sourcing} alt=""/>
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
              <img src={packaging} alt=""/>
          </div>
          </Col>
          <Col md={12} className="">
            <div className="card">
              <img src={delivery} alt=""/>
              <div>
                  <h3>DELIVERY</h3>
                  <p>We make sure we get our customers what they need—in the right amount and at the right time
                  </p>
              </div>
              
          </div>
          </Col>
        </Row>
      </Container>

      {/* home final content */}
      <Container>
      <Row>
          <Col md={6} className="home-card">
            <Card className="home-card-view">
              <Card.Body>
                <WbSunnyIcon className="icon-colour" style={{ fontSize: "40px" }}/>
                <Card.Title>Learn More </Card.Title>
                <Card.Text >
                  <p>Explore our products and services. We are the right decision for your business</p>
                </Card.Text>
                <Button className="btn" href="/about" target="_blank">Get Started With Us</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="home-card">
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
        </Row>
      </Container>


    </Container>
  );
}
export default Home2;
