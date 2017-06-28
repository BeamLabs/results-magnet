import React, { Component } from 'react';
import './Header.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect className="topnav">
        <Navbar.Header>
          <Navbar.Brand>
            <p>Results Magnet</p>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav className="nav-items">
            <LinkContainer to="/">
              <NavItem eventKey={1}>Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/about">
              <NavItem eventKey={2}>Products</NavItem>
            </LinkContainer>

            <LinkContainer to="/process">
              <NavItem eventKey={3}>Our Process</NavItem>
            </LinkContainer>

            <LinkContainer to="/beneficiaries">
              <NavItem eventKey={4}>Beneficiaries</NavItem>
            </LinkContainer>

            <LinkContainer to="/contact">
              <NavItem eventKey={5}>Contact</NavItem>
            </LinkContainer>
           
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;