import React, { Component } from 'react';

import { Card, Col, CardImg, CardImgOverlay, CardTitle, CardSubtitle,
  CardBody, CardFooter, Progress, UncontrolledButtonDropdown, DropdownToggle,
   DropdownMenu, DropdownItem } from 'reactstrap';

import { FaDatabase, FaUserFriends, FaEye, FaEdit,
  FaRegTrashAlt, FaRegCheckCircle } from 'react-icons/fa';

import { GoPrimitiveDot, GoPencil } from 'react-icons/go';

import { FiShare2 } from 'react-icons/fi';

import Constants from './constants';

class SingleCard extends Component {
  constructor(props) {
    super(props);
    this.editCard = this.editCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);

  }

  editCard() {

  }

  deleteCard() {

  }

  render() {
    var card = this.props.card
    return (
      <Col sm='3' className="px-1">
        <Card key={card.cardTitle} className="my-3">
          <CardImg top width="100%" src={card.primaryMediaUrl} alt={card.primaryMediaUrl} />
          <CardImgOverlay className="p-1">
          <UncontrolledButtonDropdown
            direction="left"
            className="float-right text-muted"
            style={{borderRadius:"10%"}}>
            <DropdownToggle nav
              className="px-1 bg-light py-1"
              style={{fontSize:".7rem",borderRadius:"10%"}}>
              <GoPencil
                style={{fontSize:".8rem",color:"DarkOrange"}} />
            </DropdownToggle>
            <DropdownMenu
              className="p-0"
              style={{minWidth:"4rem"}}>
              <DropdownItem
                className="text-muted p-1"
                style={{fontSize:".7rem"}}>
                <FaEdit onClick={this.editCard}/> Edit
              </DropdownItem>
              <DropdownItem divider className="m-0" />
              <DropdownItem
                className="text-muted p-1"
                style={{fontSize:".7rem"}}>
                <FaRegCheckCircle/> Public
              </DropdownItem>
              <DropdownItem divider className="m-0" />
              <DropdownItem
                className="text-muted p-1"
                style={{fontSize:".7rem"}}>
                <FiShare2 /> Share
              </DropdownItem>
              <DropdownItem divider className="m-0" />
              <DropdownItem
                className="text-muted p-1"
                style={{fontSize:".7rem"}}>
                <FaRegTrashAlt onClick={this.deleteCard}/> Delete
              </DropdownItem>
            </DropdownMenu>
            </UncontrolledButtonDropdown>
          </CardImgOverlay>
          <CardBody className="p-1">
            <CardTitle>{card.cardTitle} </CardTitle>
            <CardSubtitle
              className="text-muted clearfix"
              style={{'fontSize':'.60rem'}}>
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
          <CardFooter
            className="text-muted d-flex justify-content-between py-1"
            style={{'fontSize':'.50rem'}}>
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
