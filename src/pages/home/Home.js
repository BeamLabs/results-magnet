import React, { Component } from 'react';
import OfferingsSection from './homeComponents/offeringsSection';
import ContactSection from './homeComponents/contactSection';
import HomeFormComponent from './homeComponents/HomeFormComponent';
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
          <OfferingsSection/>
          <ContactSection />
          <HomeFormComponent/>
      </div>
    );
  }
}

export default Home;