import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  Navbar,
  NavbarBrand,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledButtonDropdown
} from "reactstrap";

export default class Navigation extends Component {
  renderMenuItem = () => {
    const titles = ["Resume", "About Me", "Projects", "Contact"];

    return titles.map((title, index) => {
      const link = title.replace(/ +/g, ""); //remove spaces between words
      return (
        <DropdownItem key={index}>
          <Link className="nav-link" to={link}>
            {title}
          </Link>
        </DropdownItem>
      );
    });
  };

  render() {
    return (
      <Navbar light expand="md">
        <NavbarBrand href="/">
          <i className="fa fa-code"></i>
        </NavbarBrand>
        <UncontrolledButtonDropdown nav inNavbar className="ml-auto">
          <DropdownToggle nav>
            <i className="fa fa-align-right"></i>
          </DropdownToggle>
          <DropdownMenu right>
            {this.renderMenuItem()}
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </Navbar>
    );
  }
}
