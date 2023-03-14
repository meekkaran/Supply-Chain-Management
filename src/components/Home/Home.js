import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Home2 from "./Home2";
import homeLogo from "../../Assets/air4.jpg";
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
        <Container className="home-content"> 
          <Row>
            <Col md={7} className="home-header">
                <div className="heading-name">
                    <h1>
                    Getting items delivered to your doorsteps conveniently and safely can become a real headache
                    </h1> 
                    <h4>
                        Our simple system offers an easy supply chain management plam - each with realistic cost projection,<br/> 
                        - a step by step procedure to get your items delivered safely to your door steps<br/> - and a way to track your items.
                    </h4>
                    <p>Simplify your life</p>
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
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
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
