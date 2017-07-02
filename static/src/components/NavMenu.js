import React from 'react';
import { NavLink } from 'react-router-dom';
import { Image, Nav, NavItem, Navbar } from 'react-bootstrap';
import logo from '../img/aus_logo.jpg';

export default () => (
    <Navbar fixedTop className="nav-container container-fluid">
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink exact to='/' activeClassName="selected">
            <Image src={logo} alt="aus_logo" responsive/>
          </NavLink>
        </Navbar.Brand>
            <Navbar.Toggle />
       </Navbar.Header>
       <Navbar.Collapse>
         <Nav pullRight>
            <NavItem className="nav-link">
              <NavLink to='/about' activeClassName="selected">About</NavLink>
              <NavLink to='/faq' activeClassName="selected">Faq</NavLink>
              <NavLink to='/contact' activeClassName="selected">Contact</NavLink>
            </NavItem>
         </Nav>
      </Navbar.Collapse>
    </Navbar>
)
