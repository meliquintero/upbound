import React, { Component } from 'react';

import { Card, Col, CardImg, CardImgOverlay, CardTitle,
  CardSubtitle, CardBody, CardFooter, Progress } from 'reactstrap';

import { GoPrimitiveDot, GoPencil } from 'react-icons/go';

import { FaDatabase, FaUserFriends, FaEye } from 'react-icons/fa';

import Constants from './constants';

class SingleCard extends Component {
  render() {
    var card = this.props.card
    return (
      <Col sm='3' className="px-1">
        <Card key={card.cardTitle} className="my-3">
          <CardImg top width="100%" src={card.primaryMediaUrl} alt={card.primaryMediaUrl} />
          <CardImgOverlay className="p-1">
            <div  className="bg-light float-right text-warning px-1" 
                  style={{fontSize:".7rem",borderRadius:"10%"}} >
              <GoPencil/>
            </div>
          </CardImgOverlay>
          <CardBody className="p-1">
            <CardTitle>{card.cardTitle} </CardTitle>
            <CardSubtitle className="text-muted clearfix" style={{'font-size':'.60rem'}}>
              <div className="float-left">
                {card.listOfPlans[0].price.currencySymbol} {card.listOfPlans[0].price.amount} / Month
              </div>
              <div className="float-right text-capitalize d-inline-flex">
                  {card.currentWorkflow}
                <span className={"text-" + Constants.WORKFLOW_CLASS[card.currentWorkflow]}>
                  <GoPrimitiveDot/>
                </span>
              </div>
            </CardSubtitle>
            <div className="pb-2">
              <Progress
              style={{height:'0.3rem'}}
              color={Constants.WORKFLOW_CLASS[card.currentWorkflow]}
              value={Constants.WORKFLOW_PERCENTAGE[card.currentWorkflow]}
              className="rounded-0"/>
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
