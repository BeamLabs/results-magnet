import React, { Component } from 'react';
import { Grid, Row, Col, Accordion, Panel, Carousel } from 'react-bootstrap';
import './FaqPage.css';

class FaqPage extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={12}>
            <h3 className="pagetemplate">Frequently Asked Questions</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className="faq-text">1) Why work with Results Magnet?</h3>
            <p className="faq-text">We believe that your digital needs should be fulfilled to create real results. Our firm strives to provide this to our clients because we have a seasoned track record of delivering tangible value.</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h3 className="faq-text">2) What is the cost of your services?</h3>
            <p className="faq-text">It is our responsibility to take care of each one of our clients as an individual who has unique and tailored needs. With this being said our services range in cost on a case by case basis. Fill out our form or contact us now to speak to our results concierge and find out how we can be of service to you.</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h3 className="faq-text">3) What sort of experience do you all have?</h3>
            <p className="faq-text">The team has a combined experience of 20 years, are digital savvy, have professionally worked in this space and attended university for these studies. If you have any further questions feel free to reach out to us today, we appreciate your support!</p>
          </Col>
        </Row>

      </Grid>
    );
  }
}

export default FaqPage;
