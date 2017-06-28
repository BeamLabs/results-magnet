import React, { Component } from 'react';
import EmbedVideo from './homeComponents/embedVideo';
import AboutSection from './homeComponents/aboutSection';
import TestimonialSection from './homeComponents/testimonialSection';
import ContactSection from './homeComponents/contactSection';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <Grid>
          <Row>
            <Col md={12} sm={12} className="about-hero-image">
              <Image src="http://via.placeholder.com/1000x500" responsive className="hero-image"/>
            </Col>
          </Row>
        </Grid>
          <AboutSection />
          <TestimonialSection />
          <ContactSection />
      </div>
    );
  }
}

export default Home;