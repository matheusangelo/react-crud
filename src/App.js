
import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Painel from './components/painel/Painel';
import Footer from './components/footer/Footer';
import Login from './components/login/Login'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-container" style={{ "align": "center" }}>
          <Header/>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/painel" exact component={Painel} />
          </Switch>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;