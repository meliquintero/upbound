import React, { Component } from 'react';
import './App.css';

import Header from './header/header.js';
import Cards from './cards/cards.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campaignId: null
    };
  }

  // syntatic sugar for binding
  setCampaignId = (campaignId) => {
    this.setState({campaignId: campaignId});
  }

  render() {
    return (
      <div>
        <Header setCampaignId={this.setCampaignId}/>
        <Cards campaignId={this.state.campaignId}/>
      </div>
    )
  }
}

export default App;
