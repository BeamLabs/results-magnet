import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import {FormGroup, FormControl, ControlLabel, Radio, Grid, Form, Col} from 'react-bootstrap';

class HomeFormComponent extends Component {
    render() {
        return (
            <Grid>
                <Form horizontal>
                    {/*Tier one*/}
                    <FormGroup>
                        <ControlLabel>Would a free and brief consultation discussion help you?</ControlLabel>
                        <Radio inline name="tier-one">Yes</Radio>
                        <Radio inline name="tier-one">No</Radio>
                    </FormGroup>

                    {/*Tier Two*/}
                    <FormGroup controlId="homeForm-FirstName">
                        <Col sm={2} componentClass={ControlLabel}>
                            First Name
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder="Enter your first name" name="firstName" bsSize="lg" className="form-input" required/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="homeForm-LastName">
                        <Col sm={2} componentClass={ControlLabel}>
                            Last Name
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder="Enter your last name" name="lastName" bsSize="lg" className="form-input" required/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="homeForm-Email">
                        <Col sm={2} componentClass={ControlLabel}>
                            Email
                        </Col>
                        <Col sm={10}>
                            <FormControl type="email" placeholder="john.doe@email.com" name="_replyto" bsSize="lg"  className="form-input" required/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="homeForm-PhoneNumber">
                        <Col sm={2} componentClass={ControlLabel}>
                            Phone Number
                        </Col>
                        <Col sm={10}>
                        <FormControl type="tel" placeholder="Enter your phone number" name="phoneNumber" bsSize="lg" className="form-input"/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="homeForm-Website">
                        <Col sm={2} componentClass={ControlLabel}>
                            Website URL
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder="Enter your website" name="website" bsSize="lg" className="form-input"/>
                        </Col>
                    </FormGroup>
                    <button type="submit" className="contact-submit-button">Submit</button>
                </Form>
            </Grid>
        );
    }
}

export default HomeFormComponent;

