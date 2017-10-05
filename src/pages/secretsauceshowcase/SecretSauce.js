import React, { Component } from 'react';
import { Grid, Row, Col, Accordion, Panel, Carousel } from 'react-bootstrap';

import './SecretSauce.css';

class SecretSauce extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={12}>
            <h3 className="pagetemplate">Photography Showcase</h3>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Carousel>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/images/showcase/showcase1.jpg"/>
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/images/showcase/showcase2.jpg"/>
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/images/showcase/showcase3.jpg"/>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/images/showcase/showcase4.jpg"/>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/images/showcase/showcase5.png"/>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/images/showcase/showcase6.jpg"/>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/images/showcase/showcase7.jpg"/>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/images/showcase/showcase8.jpg"/>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/images/showcase/showcase9.jpg"/>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/images/showcase/showcase10.jpg"/>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/images/showcase/showcase11.png"/>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/images/showcase/showcase12.jpg"/>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/images/showcase/showcase13.jpg"/>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/images/showcase/showcase14.jpg"/>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/images/showcase/showcase15.jpg"/>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/images/showcase/showcase16.jpg"/>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/images/showcase/showcase17.jpg"/>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>

            </Carousel>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <h3 className="pagetemplate">Videography Showcase</h3>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/w1sBdkHEFCY" frameborder="0" allowfullscreen></iframe>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/gYwJiQyaoOA" frameborder="0" allowfullscreen></iframe>          
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/nsP1_kY6EUo" frameborder="0" allowfullscreen></iframe>          
          </Col>
        </Row>

      </Grid>
    );
  }
}

export default SecretSauce;
