import React, { Component } from 'react';
import { Grid, Row, Col, Accordion, Panel, Carousel } from 'react-bootstrap';
import './OurStory.css';

class OurStory extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={12}>
            <h3 className="pagetemplate">We get you results by implementing proven, top notch digital methods.</h3>
          </Col>
        </Row>
        <Row>
          <span>
            <img src="/images/results-magnet-logo.png"/>
          </span>
          <span>
            <img src="/images/chaitinheadshot.jpg"/>
          </span>
        </Row>
        <Row>
          <Col sm={12}>
            <p>Result Magnet was created with our client's return on investment in mind. The firm was started after its founder realized that there was a gap in the marketplace, small businesses were being overlooked for reasonable digital services. It was clear to see that the available offerings were either too amateur or entirely too complicated and pricey.</p>
            <p>We are committed to be the one stop shop for all digital needs such as development and optimization of: social media outlets, websites, apps, software automation, digital consulting and more. We pride ourselves that this is all done in a way that is honest, tailored and of the utmost quality for our clients.</p>
            <p>We aim to delight those we work with so much so that they would happily recommend us throughout their own networks. We encourage you to speak with us today to learn how we could best serve you and your digital needs.</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default OurStory;
