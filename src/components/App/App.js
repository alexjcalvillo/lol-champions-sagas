import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChampionsList from '../ChampionsList/ChampionsList';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'GET_CHAMPIONS' });
  }
  render() {
    return (
      <div className="App">
        <h1>League of Legends Champions!</h1>
        <ChampionsList />
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(App);
