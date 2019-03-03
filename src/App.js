import React, { Component } from 'react';
import Navigation from './Navigation.jsx';
import Search from './Search.jsx';
import Header from './Header.jsx'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navigation />
        <Search />
      </div>
    );
  }
}

export default App;
