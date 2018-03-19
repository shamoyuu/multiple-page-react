import React, { Component } from 'react';
import logo from '@/assets/images/logo.svg';
import './index.scss';

class Index extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">世界你好</h1>
        </header>
      </div>
    );
  }
}

export default Index;
