import React, { Component } from 'react';
import {Col, Row, Grid, Image} from 'react-bootstrap';
import PropertiesButton from '../../../common/components/propertiesButton/PropertiesButton';

class AboutSection extends Component {
  render() {
    return (
        <Grid>
            <hr/>
            <Row>
                <Col lg={6} md={6} sm={6} xs={12} className="images">
                    <h3 className="pic-title">Social Media</h3>
                    <Image src="http://placehold.it/300/09f.png/fff" alt="Event Venues" className="event-venue-image square-img" responsive/>
                </Col>
                <Col lg={6} md={6} sm={6} xs={12} className="images">
                    <h3 className="pic-title">Web/SEO</h3>
                    <Image src="http://placehold.it/300/09f.png/fff" alt="Event Venues" className="vacations-image square-img" responsive/>
                </Col>
            </Row>
            <Row className="aboutSection-row">
                 <Col lg={6} md={6} sm={6} xs={12} className="images">
                    <h3 className="pic-title">Apps</h3>
                    <Image src="http://placehold.it/300/09f.png/fff" alt="Event Venues" className="stables-image square-img" responsive/>
                </Col>
                <Col lg={6} md={6} sm={6} xs={12} className="images">
                    <h3 className="pic-title">Digital Marketing</h3>
                    <Image src="http://placehold.it/300/09f.png/fff" alt="Event Venues" className="stables-image square-img" responsive/>
                </Col>
            </Row>
            <hr/>
        </Grid>
    );
  }
}

export default AboutSection;
