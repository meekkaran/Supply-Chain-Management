import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Box } from "@mui/system";
import "./quote.css";
import bgQuote  from "../../Assets/air2.jpg";
import { TextField, Typography } from "@mui/material";

function Quote() {
  return (
      <Container fluid className="quote-section" id="quote">
        <Row>
          <Col md={12}>
            {/* <img src={bgQuote} className="quoteimg" /> */}
            <div className="popup">
              <div className="close-btn">$times;</div>
              <div className="form">
                <h2>Get Quote</h2>
                <input type="text" className="field" placeholder="Your Name"></input> 
                <input type="email" className="field" placeholder="Your Email"></input>
                <input type="text" className="field" placeholder="Your Phone Number"></input> 
                <textarea className="field area" placeholder="I was wondering about availability and rates, I need help with the following:"></textarea>
                <button className="btn">GET QUOTE</button>
              </div>
            </div>
          </Col>
        </Row>
        
      </Container>
  );
}

export default Quote