import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export default class Navigation extends Component {
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

  render(){
    return (
      <Navbar light expand="md">
        <NavbarBrand href="/"><i className="fa fa-code"></i></NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>
                <i className="fa fa-align-right"></i>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link className='nav-link' to="/Resume">Resume</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link className='nav-link' to="/AboutMe">About Me</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link className='nav-link' to="/Projects">Projects</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link className='nav-link' to="/Contact">Contact</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
} 