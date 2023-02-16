import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Box } from "@mui/system";
import "./quote.css";
import bgQuote  from "../../Assets/air2.jpg";
import { TextField, Typography } from "@mui/material";

function Quote() {
  return (
    <section>
      <Container fluid className="quote-section" id="quote">
        <img src={bgQuote} className="quoteimg" />
        <Card className="box">
          <div className="box-head">
            <p>Get Quote</p>
            <button class="close">X</button>
          </div>
          
          <form>
          <TextField className="input" fullWidth label='Name' placeholder="Enter your name" />
          <TextField className="input" fullWidth label='Email' placeholder="Enter your email" />
          <TextField className="input" fullWidth label='Phone Number' placeholder="Enter your phone number"/>
          <TextField className="input" fullWidth label='How can we help you?' placeholder="I waswondering about vailability and rates, i need help with the following:"/>
          <div class="button">
            <Button className="quotebtn" type='submit'>SUBMIT</Button>
          </div>
          
          </form>
        </Card>
      </Container>

    </section>
  );
}

export default Quote