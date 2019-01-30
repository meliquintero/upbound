import React, { Component } from 'react';
import './App.css';

import Header from './header/header.js';
import Cards from './cards/cards.js';

class App extends Component {
  render() {
    return [
      <Header />,
      <Cards />
    ];
  }
}

export default App;
