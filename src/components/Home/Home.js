import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Home2 from "./Home2";
import homeLogo from "../../Assets/air4.jpg";
import websitebgBackup from "../../Assets/websitebgBackup.jpg";
import bgImage from "../../Assets/air1.jpg";
import Button from "react-bootstrap/Button";
import "./home.css";

function Home() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal)
  }
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container>
          <Row>
            <Col md={6} className="home-header">
              <div className="home-content">
                <h2>Get items delivered to your doorsteps conveniently and safely.</h2> <br/>
                <h5>Arabian Sourcing Limited offers an easy supply chain management plan - each with realistic cost projection,<br/> 
                  - a step by step procedure to get your items delivered safely to your door steps<br/> <br/>
                </h5> 
                <h4>Organizing systematically everything!</h4>
                {/* <marquee direction="right" style={{ color: '#e8b551', fontSize: '1em' }}>Test</marquee> */}
                <Button  className="home-buttons"
                  onClick={toggleModal}>
                    GET A QUOTE
                </Button>
              </div>
              
            {/* modal view */}

            {modal && (
              <div onClick={toggleModal} className="overlay">
              <div className="popup">
                  <div className="close-btn" onClick={toggleModal}>X</div>
                  <div className="form">
                    <h2>Get Quote</h2>
                    <input type="text" className="field" placeholder="Your Name"></input> 
                    <input type="email" className="field" placeholder="Your Email"></input>
                    <input type="text" className="field" placeholder="Your Phone Number"></input> 
                    <textarea className="field area" placeholder="I was wondering about availability and rates, I need help with the following:"></textarea>
                    <button className="btn">GET QUOTE</button>
                  </div>
                </div> 
              </div>
              )}
            </Col>
            <Col md={6} style={{ paddingBottom: 20 }}>
              <img
                src={websitebgBackup}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "800px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
