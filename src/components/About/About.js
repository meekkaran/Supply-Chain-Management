import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Box } from "@mui/system";
import { AiOutlineTwitter, AiFillFacebook} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./about.css";

import bgQuote  from "../../Assets/air2.jpg";
import { TextField, Typography } from "@mui/material";
import RateReviewIcon from '@mui/icons-material/RateReview';
import SourceIcon from '@mui/icons-material/Source';
import FactoryIcon from '@mui/icons-material/Factory';
import homeLogo from "../../Assets/air4.jpg";

function About() {
  return (
    <section>
      <Container fluid className="about-section" id="about">
        
        <Container fluid className="about-first">
          <h1>About Arabian Sourcing Limited</h1>
          <hr/>
          <Row>
            <Col md={5} className="about-description">
                  <img
                  src={homeLogo}
                  alt="home pic"
                  className="about-img"
                  // style={{ height: "100%" }}
                />
            </Col>
            <Col md={7} className="about-description">
              <div className="words">
                <p>ASL is a leading supply chain management company offering sourcing teams resilient and sustainable solutions 
                  to reliably bring products to market. We offer unbeatable technical knowledge in various fields from the sourcing 
                  of agricultural products to the implementation and distribution of software solutions through our seamless operations 
                  and outstanding technical expertise. 
                  <br/>
                  With years of technical experience in the African marketplace and an expertly and 
                  carefully curated partnership with industry stakeholders, your project is guaranteed success with us.</p>
                  
              
                <h3>Sourcing</h3>
                <hr/>
                <p>Our mainstay business is in developing, implementing & managing complicated ethical and sustainable 
                  supply chains for high-volume consumables for our clients, mitigating their supply side risks and therefore 
                  empowering them to focus on growth & scaling.
                  <br/><br/> 
                  ASL helps businesses & established companies find & manage the most reliable & qualified overseas suppliers for their 
                  core products.
                  <br/>
                  Our supplier identification and production management systems mean that the supply-side uncertainties and product risks 
                  are reliably taken care of when dealing with international suppliers thereby giving our clients peace of mind to focus 
                  on their core business.
                </p>

                <h3>Logistics</h3>
                <hr/>
                <p>We offer logistics and supply chain consultancy to support your industry and trade in the global exchange of goods 
                  through land transport, worldwide air and ocean freight, contract logistics, and supply chain management to and 
                  from the African marketplace by offering a service-oriented management approach.</p>
              
                <h3>Supply Chain Management</h3>
                <hr/>
                <p>ASL has specialised in logistics and supply chain IT software and system implementation and customization. 
                  We leverage our deep expertise through successful cooperation with solutions vendors to help companies leverage 
                  and deploy software investments that are  custom-made, scalable solutions or carefully deployed enterprise solutions.</p>
              </div>
            </Col>
          </Row>
        </Container>
        
        {/* vision mission section */}
        <Container>
        <h2>We toil diligently to deliver value to all parties in our supply chain from the producer to the end consumer.</h2>
        <Row>
        <Col md={4} className="home-card">
            <Card className="home-card-view">
              <Card.Body>
                <Card.Img variant="top" src={bgQuote} alt="card-img" />
                <Card.Title>OUR PRODUCTS </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  <p>We have specialised in the importation of fresh fruits and vegetables from Kenyan 
                    farmers to the varied markets of the middle east through Dubai. Be it supplying avocados, 
                    passion fruits, mangoes or baby kale, Arabian sourcing has the requisite expertise for a seamless link from farm to fork.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="home-card">
            <Card className="home-card-view">
              <Card.Body>
                <Card.Img variant="top" src={bgQuote} alt="card-img" />
                <Card.Title>OUR VISION </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  <p>It is our commitment to remove bottlenecks that hinder market access for our producers in the
                    African continent from reaching their desired markets by being the supply chain partner of choice</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="home-card">
            <Card className="home-card-view">
              <Card.Body>
                <Card.Img variant="top" src={bgQuote} alt="card-img" />
                <Card.Title>OUR MISION </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  <p>To be the supply chain partner of choice for our partners by offering a seamless link for  
                    African producers to the world markets through our hub in Dubai</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </Container>

        {/* our team section */}

        <Container className="ourteam">
          <h1>Our Team</h1>
          <div className="teams-container">
            <div className="teams">
              <img src="img.png"></img>
              <div className="name">John Doe</div>
              <div className="design">C.E.O</div>
              <div className="about">o is the CEO of Arabian sourcing.He has leveraged
                his many years of travel as an international airline pilot to forge networks in
                various markets within Africa to build a portfolio of reliable suppliers. As managing
                director of agricom holdings in Kenya, a local supply chain management company
                serving international corporates like Daigeo and DHL, he has invaluable experience
                managing the fluidity of supply chain networks
              </div>
            
              <div className="social-links">
                <a href="#"><AiFillFacebook/></a>
                <a href="#"><AiOutlineTwitter /></a>
                <a href="#"><FaLinkedinIn /></a>
              </div>
            </div>
            <div className="teams">
              <img src="img.png"></img>
              <div className="name">John Doe</div>
              <div className="design">Manager</div>
              <div className="about">o is the CEO of Arabian sourcing.He has leveraged
                his many years of travel as an international airline pilot to forge networks in
                various markets within Africa to build a portfolio of reliable suppliers. As managing
                director of agricom holdings in Kenya, a local supply chain management company
                serving international corporates like Daigeo and DHL, he has invaluable experience
                managing the fluidity of supply chain networks
              </div>
            
              <div className="social-links">
                <a href="#"> <AiFillFacebook/><i className="fa fa-facebook"></i></a>
                <a href="#"><AiOutlineTwitter /><i className="fa fa-twitter"></i></a>
                <a href="#"><FaLinkedinIn /><i className="fa fa-linkedIn"></i></a>
              </div>
            </div> 
          </div>
        </Container>
  
      </Container>

    </section>
  );
}

export default About