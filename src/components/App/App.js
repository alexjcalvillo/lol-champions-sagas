import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'GET_CHAMPIONS' });
  }
  render() {
    return (
      <div className="App">
        <h1>Pokemon!</h1>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(App);
