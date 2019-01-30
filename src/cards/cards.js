import React, { Component } from 'react';

import { Card, CardFooter, CardImg, CardTitle, CardSubtitle, CardDeck, CardColumns,
  CardBody, Progress } from 'reactstrap';

import { GoPrimitiveDot } from 'react-icons/go';

import { FaDatabase, FaUserFriends, FaEye } from 'react-icons/fa';

import cardsData from './cards.json';

import Constants from './constants';

class Cards extends Component {
  renderCardData(){
    return cardsData.map(function(card, i){
      return (
        <Card>
          <CardImg top width="100%" src={card.primaryMediaUrl} alt={card.primaryMediaUrl} />
          <CardBody>
            <CardTitle>{card.cardTitle} </CardTitle>
            <CardSubtitle className="text-muted clearfix">
              <div class="float-left">
                {card.listOfPlans[0].price.currencySymbol} {card.listOfPlans[0].price.amount} / Month
              </div>
              <div class="float-right text-capitalize">
                {card.currentWorkflow}
                <span class={Constants.WORKFLOW_CLASS[card.currentWorkflow]}>
                  <GoPrimitiveDot/>
                </span>
              </div>
            </CardSubtitle>
            <div className="pt-4">
              <Progress style={{height:'0.3rem'}} color="warning" value={card.availableQuantity} className="rounded-0"/>
            </div>
          </CardBody>
          <CardFooter className="text-muted d-flex justify-content-between">
            <div>
              <FaDatabase/> {card.totalRevenue}
            </div>
            <div>
              <FaUserFriends/> {card.shares}
            </div>
            <div>
              <FaEye/> {card.views}
            </div>
          </CardFooter>
        </Card>
      )
    })
  }

  render() {
    return (
      <CardDeck>
       <CardColumns>
        {this.renderCardData()}
      </CardColumns>
      </CardDeck>
    )
  };
}

export default Cards;
