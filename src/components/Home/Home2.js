import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Home3 from "./Home3";
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


      <Home3 />
    </Container>
  );
}
export default Home2;
