import React, { Component } from 'react';

import { Card, CardFooter, CardImg, CardTitle,
  CardSubtitle, Col, CardBody, Progress } from 'reactstrap';

import { GoPrimitiveDot } from 'react-icons/go';

import { FaDatabase, FaUserFriends, FaEye } from 'react-icons/fa';

import Constants from './constants';

class SingleCard extends Component {
  render() {
      var card = this.props.card
      return (
        <Col sm='3' className="px-1">
        <Card key={card.cardTitle} className="my-3">
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
  };
}

export default SingleCard;
