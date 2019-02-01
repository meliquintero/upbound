import React, { Component } from 'react';

import { Row, Container } from 'reactstrap';

import SingleCard from './singlecard/card';

class Cards extends Component {
  filterCards() {
    if (this.props.campaignId === null){
      return this.props.cardsData
    }

    return (
      this.props.cardsData.filter(card => {
        return card.campaignId === this.props.campaignId
      })
    );
  }

  renderCardData(){
    console.log("this.filterCards()", this.filterCards().length);
    return this.filterCards().map((card) => {
      return (
        <SingleCard card={card}
        // updateCardStatus={this.props.updateCardStatus}
        />
      )
    })
  }

  render() {
    return (
      <Container>
        <Row>
          {this.renderCardData()}
        </Row>
      </Container>
    )
  };
}

export default Cards;
