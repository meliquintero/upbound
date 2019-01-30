import React, { Component } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  FormGroup,
  Input,
  Button,
  Badge } from 'reactstrap';

import { FiList, FiSearch, FiCalendar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import categoriesData from './categories.json';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.showSearch = this.showSearch.bind(this);
    this.state = {
      shouldShowSearch: false,
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  showSearch() {
    this.setState({
      shouldShowSearch: !this.state.shouldShowSearch
    });
  }

  getCategories() {
    return categoriesData.map(function(categorie){
      return (
        <DropdownItem>
          {categorie.id}
        </DropdownItem>
      )
    });
  }

  renderDropdown() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          All Campaigns
        </DropdownToggle>
        <DropdownMenu>
          {this.getCategories()}
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }

  renderSearch() {
    return (
      <NavItem>
        <Form inline>
          {this.state.shouldShowSearch &&
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            </FormGroup>
          }
          <FiSearch onClick={this.showSearch} />
        </Form>
      </NavItem>
    )

  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="sm">
          <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mr-auto mt-2 mt-lg-0" navbar>
                {this.renderDropdown()}
                <NavItem>
                  <NavLink href="/pending/"> <FiList/> Pending</NavLink>
                </NavItem>
              </Nav>
              <Nav navbar>
                {this.renderSearch()}
                <NavItem>
                  <FiChevronLeft/>
                  <FiCalendar/>
                  <FiChevronRight/>
                </NavItem>
                <NavItem>
                  <Badge color="danger" pill>day</Badge>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
    )
  };
}

export default Header;
