import React, { Component } from 'react';

import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Form,
  FormGroup,
  Input } from 'reactstrap';

import { FiList, FiSearch } from 'react-icons/fi';

import Campaigns from '../campaigns/campaigns.js';
import Calendar from '../calendar/calendar.js';

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

  renderSearch() {
    return (
      <NavItem>
        <Form inline>
          <FormGroup>
            {this.state.shouldShowSearch &&
              <Input className="form-control form-control-sm" type="search" placeholder="Search" aria-label="Search" />
            }
            <FiSearch onClick={this.showSearch} />
          </FormGroup>
        </Form>
      </NavItem>
    )
  }

  render() {
    return (
        <Navbar color="light" light expand="sm">
          <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
            <Container>
              <Nav className="mr-auto d-inline-flex" navbar>
                <Campaigns setCampaignId={this.props.setCampaignId}/>
                <NavItem style={{fontSize:'1rem'}}>
                  <NavLink href="/pending/"> <FiList/> Pending</NavLink>
                </NavItem>
              </Nav>
              <Nav navbar className="float-right mr-auto mt-2 mt-lg-0 d-inline-flex">
                {this.renderSearch()}
                <NavItem>
                  <Calendar/>
                </NavItem>
              </Nav>
              </Container>
            </Collapse>
          </Navbar>
    )
  };
}

export default Header;
