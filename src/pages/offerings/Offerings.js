import React, { Component } from 'react';
import { Grid, Row, Col, Accordion, Panel } from 'react-bootstrap';
import './Offerings.css';

class Offerings extends Component {
    render() {
        return(
            <Grid>
                <Row>
                    <Col sm={12}>
                        <h1 className="offerings-title">Offerings</h1>
                    </Col>
                </Row>

                <div className="social-media-section section">
                    <Row>
                        <Col sm={12}>
                            <h2 className="section-title">Social Media</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <p className="info-paragraph">We have a full lineup of social media outlet expertise, the pinnacle of measurable marketing. With social media optimization, profiles are able to be targeted rather than traditional marketing which focuses only on wasteful spending, large numbers and personas.</p>
                        </Col>
                    </Row>
                    <Accordion>
                        <Panel header="For Example" eventKey={1} className="title-panel">
                            <p className="panel-info-text">A billboard may be seen by 150.000 people a month. Out of the viewers of that billboard only 50% may be target relevant and only 1% of them may convert to buyers so 750 conversions. At an average of $3,000 a month this seems decent. 
                            <br/>
                            <br/>
                            However with social media we can directly target profiles for example: men, age 19-21, who live in New York, NY or Toronto, CA or Sydney, AU who all like Comedy Central all for a fraction of the billboard monthly cost and having better conversion overall. It is clear that modern marketing is the crown jewel compared to traditional media such as billboards, TV, magazines, etc.</p>
                        </Panel>
                    </Accordion>
                </div>

                <div className="web-design-section section">
                    <Row>
                        <Col sm={12}>
                            <h2 className="section-title">Web Design and Optimization</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <p className="info-paragraph">Today a relevant site says a lot about your business and its reputation. We can build or refine a site to be optimized to keep your brand sharp and relevant.</p>
                        </Col>
                    </Row>
                    <Accordion>
                        <Panel header="Think About This" eventKey={2} className="title-panel">
                            <p className="panel-info-text">If you don't have a website there is little digital credibility when prospective customers Google to find out what your offerings are. Or say you do have a website but it constantly needs to be updated and your web designer requires your site to be down for extended periods of time to regularly to modify it, thus missing out on countless engagements.</p>
                        </Panel>
                    </Accordion>
                </div>

                <div className="app-creation-section section">
                    <Row>
                        <Col sm={12}>
                            <h2 className="section-title">App Creation and Refinement</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <p className="info-paragraph">Whether it be an app for games, utilities, your site, etc. apps are a great option for particular firms to increase consumer access and engagement with their brand.</p>
                        </Col>
                    </Row>
                    <Accordion>
                        <Panel header="Like When" eventKey={3} className="title-panel">
                            <p className="panel-info-text">You have a genius app idea and there is nothing else like it on the market. You know you could sell it left and right plus make ad money from its popularity, but you don't have the time to learn how to code the app</p>
                        </Panel>
                    </Accordion>
                </div>

                <div className="software-section section">
                    <Row>
                        <Col sm={12}>
                            <h2 className="section-title">Software Optimization and Process Efficiently</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <p className="info-paragraph">Excel is a great tool but imagine all of the money and productive time that could be saved when systems are automated. We want to offer these services to best solve your process challenges and shortcomings.</p>
                        </Col>
                    </Row>
                    <Accordion>
                        <Panel header="As an Example" eventKey={4} className="title-panel">
                            <p className="panel-info-text">Every quarter, a week of productive time is spent by you or your head of sale preparing forecasting and revenue expectations with pivot charts in Excel. This can be automated to dwarf the amount of time, funds and headache needed to produce even better results.</p>
                        </Panel>
                    </Accordion>
                </div>

                <div className="digital-consulting-section section">
                    <Row>
                        <Col sm={12}>
                            <h2 className="section-title">Digital Consulting</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <p className="info-paragraph">We offer consulting by the hour to aid your challenges. We know that sometimes you could use expertise to make your difficulties disappear rapidly. Your time is precious so feel confident that we are on the case.</p>
                        </Col>
                    </Row>
                    <Accordion>
                        <Panel header="Consider" eventKey={5} className="title-panel">
                            <p className="panel-info-text">You know that there are some tweaks you could make to your social media page but are just not sure how to implement them or what direction to go. We can step in to advise and check those concerns off of your list.</p>
                        </Panel>
                    </Accordion>
                </div>
            </Grid>
        );
    }
}

export default Offerings;