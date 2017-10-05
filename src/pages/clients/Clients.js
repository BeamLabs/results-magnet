import React, { Component } from 'react';
import { Grid, Row, Col, Accordion, Panel, Carousel } from 'react-bootstrap';

import './Clients.css';

class Clients extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={12}>
            <h3 className="pagetemplate">Brands We've Served</h3>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Carousel>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/images/brands/brands1.jpg"/>
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/images/brands/brands2.png"/>
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/images/brands/brands3.png"/>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/images/brands/brands4.jpg"/>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/images/brands/brands5.png"/>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/images/brands/brands6.png"/>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/images/brands/brands7.png"/>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/images/brands/brands8.jpg"/>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/images/brands/brands9.png"/>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/images/brands/brands10.png"/>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/images/brands/brands11.png"/>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>

            </Carousel>
          </Col>
        </Row>

      </Grid>
    );
  }
}

export default Clients;
