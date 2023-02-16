import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./contact.css";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  return (
    <section>
      <Container fluid className="contact-section" id="contact">
        <h1>Got a question?</h1>
        <p>Leave us a message below and we'll get in touch with you as soon as we can.</p>
        
      </Container>
      <Container className="contact">
        <div className="contact-heading">
          <h2>Contact Us</h2>
        </div>
        <div className="container">
          <Row>
          <div className="row">
            <Col md="6">
            <div className="column">
              <div className="contact-widget">

                <div className="contact-widget-item">
                  <div className="icon">
                    <LocationOnIcon className="i"/>
                  </div>
                  <div className="text">
                    <h5>Address</h5>
                    <p>20 W 34th Street, New York, united states</p>
                  </div>
                </div>

                <div className="contact-widget-item">
                  <div className="icon">
                    <LocalPhoneIcon className="i"/>
                  </div>
                  <div className="text">
                    <h5>Contact us</h5>
                    <p>+254 7 13 201 600</p>
                  </div>
                </div>

                <div className="contact-widget-item">
                  <div className="icon">
                    <EmailIcon className="i"/>
                  </div>
                  <div className="text">
                    <h5>Mail</h5>
                    <p>info@arabiansourcing.co.ke</p>
                  </div>
                </div>

              </div>
            </div>
            </Col>

            <Col md="6">
            <div className="column">
              <div className="contact-form">
                <form action="#">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                  <textarea placeholder="Comment"></textarea>
                  <button type="submit" className="site-btn">Send Message</button>
                </form>
              </div>
            </div>
            </Col>
          </div>
          </Row>

          <div className ="row">
            <div className="map-column">
              <div className="contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.1209216733914!2d-0.1264290688369983!3d51.52934191451319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3b70171395%3A0x18905479de0fdb25!2sThe%20British%20Library!5e0!3m2!1sen!2ske!4v1676483235431!5m2!1sen!2ske" 
                  width="600" 
                  height="450" 
                  style={{border:0}} 
                  allowfullscreen="" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact