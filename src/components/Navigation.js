import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {
  Navbar,
  NavbarBrand,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledButtonDropdown
} from 'reactstrap';

export default class Navigation extends Component {
  render(){
    return (
      <Navbar light expand="md" >
        <NavbarBrand href="/"><i className="fa fa-code"></i></NavbarBrand>
        <UncontrolledButtonDropdown nav inNavbar className="ml-auto">
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
          </UncontrolledButtonDropdown>
      </Navbar>
    )
  }
} 