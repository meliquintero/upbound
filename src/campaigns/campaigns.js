import React, { Component } from 'react';

import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import campaignsData from './campaigns.json';

class Campaigns extends Component {

  getCampaigns() {
    return campaignsData.map(function(campaign, i){
      return (
        <DropdownItem
        key={i}
        onClick={() => this.props.setCampaignId(campaign.id)}>
          {campaign.id}
        </DropdownItem>
      )
    }.bind(this));
  }

  render() {
    return (
      <UncontrolledDropdown className="border border-secundary rounded" nav inNavbar>
        <DropdownToggle nav caret>
          All Campaigns
        </DropdownToggle>
        <DropdownMenu>
          {this.getCampaigns()}
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  };
}

export default Campaigns;
