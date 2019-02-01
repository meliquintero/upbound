import React, { Component } from 'react';
import './App.css';

import Header from './header/header.js';
import Cards from './cards/cards.js';

import cardsData from './cards/cards.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campaignId: null,
      cardsData: cardsData
    };
  }

  // syntatic sugar for binding
  setCampaignId = (campaignId) => {
    this.setState({campaignId: campaignId});
  }

  updateCardStatus = (card) => {
    this.setState(({ cardsData }) => ({
      cardsData: cardsData.filter(element => element !== card)
    }));
  };

  render() {
    return (
      <div>
        <Header setCampaignId={this.setCampaignId}/>
        <Cards
        campaignId={this.state.campaignId}
        cardsData={this.state.cardsData}
        updateCardStatus={this.updateCardStatus}/>
      </div>
    )
  }
}

export default App;
