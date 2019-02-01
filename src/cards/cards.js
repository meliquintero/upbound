import React, { Component } from 'react';

import { Card, CardFooter, CardImg, CardTitle, CardSubtitle,
  Col, Row, Container, CardBody, Progress } from 'reactstrap';

import { GoPrimitiveDot } from 'react-icons/go';

import { FaDatabase, FaUserFriends, FaEye } from 'react-icons/fa';

import cardsData from './cards.json';

import Constants from './constants';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.cardsData = cardsData;
  }

  filterCards() {
    if (this.props.campaignId === null){
      return this.cardsData
    }
    return (
      this.cardsData.filter(card =>
        card.campaignId === this.props.campaignId
      )
    );
  }

  renderCardData(){
    return this.filterCards().map(function(card, i){
      return (
        <Col sm='3'>
        <Card key={i} className="my-3">
          <CardImg top width="100%" src={card.primaryMediaUrl} alt={card.primaryMediaUrl} />
          <CardBody className="p-1">
            <CardTitle>{card.cardTitle} </CardTitle>
            <CardSubtitle className="text-muted clearfix" style={{'font-size':'.60rem'}}>
              <div className="float-left">
                {card.listOfPlans[0].price.currencySymbol} {card.listOfPlans[0].price.amount} / Month
              </div>
              <div className="float-right text-capitalize d-inline-flex">
                  {card.currentWorkflow}
                <span className={Constants.WORKFLOW_CLASS[card.currentWorkflow]}>
                  <GoPrimitiveDot/>
                </span>
              </div>
            </CardSubtitle>
            <div className="pb-2">
              <Progress style={{height:'0.3rem'}} color="warning" value={card.availableQuantity} className="rounded-0"/>
            </div>
          </CardBody>
          <CardFooter className="text-muted d-flex justify-content-between py-1" style={{'font-size':'.50rem'}}>
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
        </Col>
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
