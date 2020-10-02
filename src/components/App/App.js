import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// custom components
import Home from '../views/Home/Home';
import Champion from '../views/Champion/Champion';

// custom styles
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'GET_CHAMPIONS' });
  }
  render() {
    return (
      <div className="App">
        <h1 className="App-heading">League of Legends Champions!</h1>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/champion/:id" component={Champion} />
        </Router>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(App);
