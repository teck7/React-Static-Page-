import React from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

export default class NavMenu extends React.Component {

    constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }

    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render () {
        return (
          <div>
              <Navbar color="faded container-fluid" light toggleable>
                  <NavbarToggler right onClick={this.toggle} />
                  <NavLink exact to='/' activeClassName="selected">Yana</NavLink>
                  <Collapse isOpen={this.state.isOpen} navbar>
                      <Nav className="ml-auto" navbar>
                          <NavItem>
                              <NavLink exact to='/' activeClassName="selected">Home</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to='/about' activeClassName="selected">About</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to='/faq' activeClassName="selected">Faq</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to='/contact' activeClassName="selected">Contact</NavLink>
                          </NavItem>
                      </Nav>
                  </Collapse>
              </Navbar>
          </div>
        );
    }
}
