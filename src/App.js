import React, { Component } from 'react';
//import logo from './logo.svg';

import Nav from './Nav'
import Content from './Content'
import Header from './Header'
import Footer from './Footer'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Nav />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
