import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductsList from './ProductsList.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Products</h2>
        </div>
        <div className="App-container">
          <ProductsList />
        </div>
      </div>
    );
  }
}

export default App;
