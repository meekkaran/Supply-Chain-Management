import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/air4.jpg";
import bgImage from "../../Assets/air1.jpg";
import Button from "react-bootstrap/Button";
import "./quote.css";

function Quote() {
  const [modal, setModal] = useState(true);
  const toggleModal = () => {
    setModal(!modal)
  }
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content"> 
          <Row>
            <Col md={12} className="home-header">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
              <div className="quote-content">
                <h1>GET A FREE  QUOTE ONLINE</h1>
                <h3>Fill out your details  and you will receive an email shortly</h3>
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
            {/* <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col> */}
          </Row>
        </Container> 
      </Container>

    </section>
  );
}

export default Quote;
