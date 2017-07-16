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
                <h1>Snapshot of Our Core Deliverables</h1>
            </Col>
        </Row>
        <Row className="top-offer-icon-section">
            <Col md={6} sm={12} className="offer-icon">
                <i className="fa fa-users fa-3x fa-icon" aria-hidden="true"></i>
                <h3>Social Media</h3>
                <p>Social media is responsible for bringing new and repeat customers to your website/location and gaining revenue.</p>
            </Col>
            <Col md={6} sm={12} className="offer-icon">
                <i className="fa fa-globe fa-3x fa-icon" aria-hidden="true"></i>
                <h3>Web Design and Optimization</h3>
                <p>Do you need a website? Does your website need special attention? Some websites need to be created, others just need a facelift or become modernized.</p>
            </Col>
        </Row>
        <Row>
            <Col md={6} sm={12} className="offer-icon middle-icon">
                <i className="fa fa-mobile fa-4x fa-icon" aria-hidden="true"></i>
                <h3>App Creation and Refinement</h3>
                <p>Apps are all the craze with so many people having smart devices. Apps are slowly becoming the new necessity for a well rounded digital presence.</p>
            </Col>
        </Row>
        <Row>
            <Col md={6} sm={12} className="offer-icon">
                <i className="fa fa-cloud fa-3x fa-icon" aria-hidden="true"></i>
                <h3>Software Optimization and Process Efficiently</h3>
                <p>Software is your friend. We can facilitate cloud and native needs to make sure that you are fully managing your workflow.</p>
            </Col>
            <Col md={6} sm={12} className="offer-icon">
                <i className="fa fa-line-chart fa-3x fa-icon" aria-hidden="true"></i>
                <h3>Digital Consulting</h3>
                <p>We understand sometimes you simply need a helping hand and a digitally trained pair of eyes on the case.</p>
            </Col>
        </Row>
        <hr/>
      </Grid>
    );
  }
}

export default OfferingsSection;
