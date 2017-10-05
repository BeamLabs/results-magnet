import React, { Component } from 'react';
import { Grid, Row, Col, Accordion, Panel, Carousel } from 'react-bootstrap';
import './Beneficiaries.css';

class Beneficiaries extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={12}>
            <h3 className="pagetemplate">​Results Magnet believes that doing good is good business. We want to provide for those who sacrifice for freedom and our planet. Each of these charitable organizations will receive a yearly 1% of Result Magnet's profit.</h3>
          </Col>
        </Row>
        <Row>
          <img src="/images/dav.png"/>
          <p>DAV (Disabled American Veterans) Chariable Service Trust</p>
          <a href="https://www.dav.org">https://www.dav.org</a>
        </Row>
        <Row>
          <Col sm={12}>
            <p>We feel that the ultimate sacrifice is to put your life at risk for freedom and those you love. We are glad and excited to help support such a terrific cause:</p>
            <p>DAV is a nonprofit charity that provides a lifetime of support for veterans of all generations and their families, helping more than 1 million veterans in positive, life-changing ways each year. The organization provides more than 700,000 rides for veterans attending medical appointments and assists veterans with more than 300,000 benefit claims annually. In 2015, DAV helped attain more than $4 billion in new and retroactive benefits to care for veterans, their families and survivors.</p>
            <p>DAV is also a leader in connecting veterans with meaningful employment, hosting job fairs and providing resources to ensure they have the opportunity to participate in the American Dream their sacrifices have made possible.</p>
            <p>With almost 1,300 chapters and 1.3 million members across the country, DAV empowers our nation’s heroes and their families by helping to provide the resources they need and ensuring our nation keeps the promises made to them.</p>
          </Col>
        </Row>

        <Row>
          <img src="/images/ucs.png"/>
          <p>Union of Concerned Scientists</p>
          <a href="http://www.ucsusa.org/">http://www.ucsusa.org/</a>
        </Row>
        <Row>
          <Col sm={12}>
            <p>​As of now we have one viable planet called earth. We inhabit it and so far it has taken wonderful care of us. We want to ensure that we help to return the favor:</p>
            <p>Our scientists and engineers develop and implement innovative, practical solutions to some of our planet’s most pressing problems—from combating global warming and developing sustainable ways to feed, power, and transport ourselves, to fighting misinformation, advancing racial equity, and reducing the threat of nuclear war.</p>
          </Col>
        </Row>

      </Grid>
    );
  }
}

export default Beneficiaries;
