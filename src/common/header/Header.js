import React, { Component } from 'react';
import './Header.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

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
              <NavItem eventKey={2}>How We Create Results</NavItem>
            </LinkContainer>
            <LinkContainer to="/showcase">
              <NavItem eventKey={3}>Our Secert Sauce Showcase</NavItem>
            </LinkContainer>
            <LinkContainer to="/clients">
              <NavItem eventKey={4}>Brands We've Served</NavItem>
            </LinkContainer>
            <NavDropdown eventKey={6} title="More...">
              <LinkContainer to="/story">
                <MenuItem eventKey={6.1}>Our Story</MenuItem>
              </LinkContainer>
              <LinkContainer to="/beneficiaries">
                <MenuItem eventKey={6.2}>Meaningful Beneficiaries</MenuItem>
              </LinkContainer>
              <LinkContainer to="/faq">
                <MenuItem eventKey={6.3}>FAQ's</MenuItem>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;