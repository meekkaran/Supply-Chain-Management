import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Box } from "@mui/system";
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
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
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

        <Container>
          <h1>Our Team</h1>
          <Row>
            <Col md={4} className="home-card">
            <Card className="home-card-view">
              <Card.Body>
                <FactoryIcon className="icon-colour" style={{ fontSize: "50px" }}/>
                <Card.Title>OUR MISION </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil autEligendi non quis exercitationem culpa nesciunt nihil autEligendi non quis exercitationem
                     culpa nesciunt nihil autEligendi non quis exercitationem culpa nesciunt nihil autEligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="home-card">
            <Card className="home-card-view">
              <Card.Body>
                <FactoryIcon className="icon-colour" style={{ fontSize: "50px" }}/>
                <Card.Title>OUR MISION </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil autEligendi non quis exercitationem culpa nesciunt nihil autEligendi non quis exercitationem
                     culpa nesciunt nihil autEligendi non quis exercitationem culpa nesciunt nihil autEligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          </Row>
        </Container>
  
      </Container>

    </section>
  );
}

export default About