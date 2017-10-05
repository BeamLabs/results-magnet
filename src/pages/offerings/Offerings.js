import React, { Component } from 'react';
import { Grid, Row, Col, Accordion, Panel } from 'react-bootstrap';
import './Offerings.css';

class Offerings extends Component {
    render() {
        return(
            <Grid>
                <Row>
                    <Col sm={12}>
                        <h1 className="offerings-title">Our Offerings</h1>
                        <p>We encourage you to take a brief inventory of your current digital resources and gauge how we could help your firm achieve its goals-</p>
                    </Col>
                </Row>

                <div className="social-media-section section">
                    <Row>
                      <Col sm={12}>
                        <img src="/images/social_media.jpg" />
                      </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <h2 className="section-title">Social Media</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <p className="info-paragraph">Social media is the pinnacle of measurable marketing. With social media profiles, we are able to be targeted rather than traditional marketing which focuses only on large budgets and personas.</p>
                        </Col>
                    </Row>
                    <Accordion>
                        <Panel header="For Example" eventKey={1} className="title-panel">
                            <p className="panel-info-text">For instance, a billboard may be seen by 1,000,000 people a month. Out of the viewers of that billboard only 50% may be target relevant but only 1% convert to buyers thus 5,000 conversions. At an average of $3,000 a month this seems reasonable. However with social media we can directly target profiles, for example: men, age 19-21, who live in New York, NY as well as those who live in Toronto, CA and Sydney, AU who all like Comedy Central. We can do this for a fraction of what a billboard ad would cost.</p>
                        </Panel>
                    </Accordion>
                </div>

                <div className="social-media-section section">
                    <Row>
                      <Col sm={12}>
                        <img src="/images/multi_media.jpg" />
                      </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <h2 className="section-title">Multi Media</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <p className="info-paragraph">Masterpieces require thoughtful pre-production (planning), production (capturing) and post-production (editing). These components are key for a successful online presence, a plain website with text just doesn’t cut it anymore.</p>
                        </Col>
                    </Row>
                    <Accordion>
                        <Panel header="For Example" eventKey={1} className="title-panel">
                            <p className="panel-info-text">How much time do people spend watching TV or listening to the radio compared to reading each day? Precisely, visuals and audio are a fantastic and necessary means to attract and retain attention.</p>
                            <p className="panel-info-text">Say your business has a watertight marketing message but it’s only displayed with text, that approach will immediately alienate a vast number of viewers who are more visual or stimulus driven.</p>
                        </Panel>
                    </Accordion>
                </div>

                <div className="web-design-section section">
                    <Row>
                      <Col sm={12}>
                        <img src="/images/web_design.jpg" />
                      </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <h2 className="section-title">Web Design and Optimization</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <p className="info-paragraph">Do you need a website? Does your website need attention. Some websites need to be born, others just need a facelift. Today a relevant site says a lot about your business. We can help build an optimized site that keeps your brand as sharp as your firm is.</p>
                        </Col>
                    </Row>
                    <Accordion>
                        <Panel header="For Example" eventKey={1} className="title-panel">
                            <p className="panel-info-text">You don't have a website, so you effectively have little digital credibility.</p>
                            <p className="panel-info-text">--or--</p>
                            <p className="panel-info-text">You have a website but it constantly needs to be updated and your web designer requires your site to be down regularly to modify it. This results in many lost opportunities and lack of digital strategy.</p>
                        </Panel>
                    </Accordion>
                </div>

                <div className="app-creation-section section">
                    <Row>
                      <Col sm={12}>
                        <img src="/images/app_creation.jpg" />
                      </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <h2 className="section-title">App Creation and Refinement</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <p className="info-paragraph">Apps are the new hot topic and are slowly becoming the new necessity to have a well rounded digital presence. Whether it be games, utilities, etc. apps are a wonderful option to increase brand engagement and spread your creative freedom.</p>
                        </Col>
                    </Row>
                    <Accordion>
                        <Panel header="Example" eventKey={3} className="title-panel">
                            <p className="panel-info-text">You have a genius app idea and there is nothing else like it on the market but you don't have the time to learn how to code an app.</p>
                        </Panel>
                    </Accordion>
                </div>

                <div className="software-section section">
                    <Row>
                      <Col sm={12}>
                        <img src="/images/software_optimization.jpg" />
                      </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <h2 className="section-title">Software Optimization and Process Efficiency</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <p className="info-paragraph">Software is your friend. We can facilitate cloud and native needs to make sure that you are as strategically managing your work flow. Excel is a great tool, but imagine all of the money and productive time that could be mitigated when systems are automated. We want to offer these services to best solve your efficiency challenges.</p>
                        </Col>
                    </Row>
                    <Accordion>
                        <Panel header="Example" eventKey={4} className="title-panel">
                            <p className="panel-info-text">Every quarter, a week of productive time is spend preparing sales forecasting and revenue expectations with pivot charts in Excel. This can be automated to dwarf the amount of time and headache needed to produce a similar or better result.</p>
                        </Panel>
                    </Accordion>
                </div>

                <div className="branding-section section">
                    <Row>
                      <Col sm={12}>
                        <img src="/images/branding.png" />
                      </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <h2 className="section-title">Branding</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                        <p className="info-paragraph">A logo, brand colors, font, business cards, marketing materials, company slogan, mission statement, etc. are sometimes overlooked by businesses. However, we all know these items supplant your firm in the eyes of the marketplace. We can assist to make sure your firm is memorable for the right reasons and sticks out.</p>
                        </Col>
                    </Row>
                    <Accordion>
                        <Panel header="Example" eventKey={4} className="title-panel">
                          <p className="panel-info-text">You have a big meeting with a prospective client and know they will ask for your business card but yours looks like a kindergarten art project, thus not displaying your true professionalism.</p>
                          <p className="panel-info-text">The big industry trade show is coming up and you want to hand out a few promotional items to have those in attendance remember your business down the road. You need t-shirts, pens, mouse pads, etc. but don't know how to make all of these items.</p>
                        </Panel>
                    </Accordion>
                </div>

                <div className="digital-consulting-section section">
                    <Row>
                      <Col sm={12}>
                        <img src="/images/digital_consulting.jpg" />
                      </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <h2 className="section-title">Digital Consulting</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <p className="info-paragraph">We understand sometimes you simply need a helping hand and a digital centric pair of eyes on the case. We offer consulting by the hour to aid your challenges that could use expertise to resolve your difficulties. Time is a precious resource so feel confident that we are on the case to solve your needs properly and rapidly.</p>
                        </Col>
                    </Row>
                    <Accordion>
                        <Panel header="Example" eventKey={4} className="title-panel">
                            <p className="panel-info-text">You know that there are some tweaks you could make to your social media page but are just not sure how to or what direction to go. We can step in to advise and check those concerns off your list.</p>
                        </Panel>
                    </Accordion>
                </div>
            </Grid>
        );
    }
}

export default Offerings;