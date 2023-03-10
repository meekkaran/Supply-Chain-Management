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

function About() {
  return (
    <section>
      <Container fluid className="about-section" id="about">
        <h2>About Arabian Sourcing Limited</h2>
        <Container>
        <Row>
          <Col md={6} className="about-description">
            <div className="">
              <h3>Choose A service</h3>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>
            </div>
          </Col>
          <Col md={6} className="about-description">
            <div className="">
              <h3>Track Your Product</h3>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>
            </div>
          </Col>
        </Row>

        <Container>
        <h2>We toil diligently to deliver value to all parties in our supply chain from the producer to the end consumer.</h2>
        <Row>
        <Col md={4} className="home-card">
            <Card className="home-card-view">
              <Card.Body>
                <RateReviewIcon className="icon-colour" style={{ fontSize: "50px" }}/>
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
                <SourceIcon className="icon-colour" style={{ fontSize: "50px" }}/>
                <Card.Title>TARGET MARKET</Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo 
                     reprehenderit optio amet ab temporibus asperiores quasi cupiditate.Eligendi non quis Eligendi non quis exercitationem culpa nesciunt nihil autexercitationem culpa nesciunt nihil aut Voluptatum ducimus voluptates voluptas?</p>
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

        {/* our team section */}

        <Container>
          <h1>Our Team</h1>
          {/* <div class="header"><h1>Our Team</h1></div>
          <div class="teams">
            <img src="svg/profil1.vg" alt="team img"></img>
            <div className="name">John Doe</div>
            <div className="design">Manager</div>
            <div className="about">dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
             printer took a galley of type and scrambled it to make 
             a type specimen book.</div>
            <div className="social-links">
              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-linkedIn"></i></a>
            </div>
          </div> */}
          <Row>
            <Col md={6} className="team-section">
              ggb
            </Col>
            <Col md={6} className="team-section">
              ggb
            </Col>
          </Row>
        </Container>

  
      </Container>

      </Container>

    </section>
  );
}

export default About