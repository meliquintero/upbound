import React, { Component } from 'react';

import { Container, Badge } from 'reactstrap';

import { FiChevronLeft, FiCalendar, FiChevronRight } from 'react-icons/fi';

import dateformat from 'dateformat';

class Calendar extends Component {
  constructor(props) {
    super(props);
    const todaysDate = new Date()
    this.state = {
      date: dateformat(todaysDate, 'dddd, mmm dS')
    };
  }

  render() {
    return (
      <Container className="text-danger" style={{'font-size':'.75rem'}}>
        <FiChevronLeft className="mr-3"/>
        <FiCalendar className="mr-2" />
        {this.state.date}
        <FiChevronRight className="mx-3"/>
        <Badge color="danger" pill>day</Badge>
      </Container>
    )
  };
}

export default Calendar;
