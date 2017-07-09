import React, { Component } from 'react';
import './Header.css';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
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
            <LinkContainer to="/offerings">
              <NavItem eventKey={2}>Offerings</NavItem>
            </LinkContainer>
            <LinkContainer to="/showcase">
              <NavItem eventKey={3}>Secert Sauce Showcase</NavItem>
            </LinkContainer>
            <LinkContainer to="/story">
              <NavItem eventKey={4}>Our Story</NavItem>
            </LinkContainer>
            <LinkContainer to="/beneficiaries">
              <NavItem eventKey={5}>Meaningful Beneficiaries</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;