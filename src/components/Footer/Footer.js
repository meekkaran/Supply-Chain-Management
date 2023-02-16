import { fontWeight } from "@mui/system";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./footer.css";
import logo from "../../Assets/editlogo.jpg";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Container fluid className ="footer-word">
        <Row>
        <Col md="3">
            <img src={logo} className="img-fluid logo" alt="brand" />
            <h5>We are a Supply Chain Management and Solutions company specializing 
              in the managing the flow of goods and services from </h5>
        </Col>
        <Col md="3">
          <h3>Company info</h3>
          <ul>
            <li><a href="">About Us</a></li>
            <li><a href="">Our Partners</a></li>
            <li><a href="">Quotation Rates</a></li>
          </ul>
        </Col>
        <Col md="3">
        <h3>Our Products</h3>
        <ul>
            <li><a href="">Freight</a></li>
            <li><a href="">Ecommerce</a></li>
            <li><a href="">Supply chain</a></li>
            <li><a href="">Express</a></li>
          </ul>
        </Col>
        <Col md="3">
          <h3>Help Center</h3>
          <ul>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Login</a></li>
            <li><a href="">Portal</a></li>
          </ul>
        </Col>
        </Row>
        
      </Container>
      <Row>
        <Col md="3" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/meekkaran"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/meekkaran_"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/meek-jerop-karan-46584a1b0/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/meekkaran_"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>

      <Row>
        <Col className="footer-copywright"> 
          <p> © {year} all rights reserved Arabian Sourcing</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
