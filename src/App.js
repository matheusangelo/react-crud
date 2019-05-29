
import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from '../src/components/header/header'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-container" style={{ "align": "center" }}>
          <Switch>
            <Route path="/" exact component={Header} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;