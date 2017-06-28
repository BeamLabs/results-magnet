import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.css';

class OfferingsSection extends Component {
  render() {
    return (
      <Grid className="offerings-container">
        <hr/>
        <Row>
            <Col md={12} sm={12}>
                <h1>Offerings</h1>
            </Col>
        </Row>
        <Row className="offer-icon-section">
            <Col md={3} sm={12} className="offer-icon">
                <i className="fa fa-camera fa-3x" aria-hidden="true"></i>
                <h3>Social Media</h3>
                <p>We have a full offering lineup of social media which is the pinnacle of measurable marketing. With social media profiles are able to be hit rather than standard marketing which focused on large numbers and personas. </p>
            </Col>
            <Col md={3} sm={12} className="offer-icon">
                <i className="fa fa-globe fa-3x" aria-hidden="true"></i>
                <h3>Web Design</h3>
                <p>Do you need a website? Does your website need attention? A relevant site says a lot about your business. We can help build an optimized site that keep your brand as sharp as your firm is.</p>
            </Col>
            <Col md={3} sm={12} className="offer-icon">
                <i className="fa fa-mobile fa-4x" aria-hidden="true"></i>
                <h3>Applications</h3>
                <p>Apps are the new thing and are slowly becoming the new necessity to have a well rounded digital presence. Whether it be games, utilities, etc. apps are great options to increase brand engagement and spread your creative freedom.</p>
            </Col>
            <Col md={3} sm={12} className="offer-icon">
                <i className="fa fa-line-chart fa-3x" aria-hidden="true"></i>
                <h3>Applications</h3>
                <p>Apps are the new thing and are slowly becoming the new necessity to have a well rounded digital presence. Whether it be games, utilities, etc. apps are great options to increase brand engagement and spread your creative freedom.</p>
            </Col>
        </Row>
        <hr/>
      </Grid>
    );
  }
}

export default OfferingsSection;
