import React, { Component } from 'react';
import ChampionsList from '../../ChampionsList/ChampionsList';

class Home extends Component {
  clickChampion = (id) => (event) => {
    this.props.history.push(`/champion/${id}`);
  };
  render() {
    return (
      <div>
        <ChampionsList clickChampion={this.clickChampion} />
      </div>
    );
  }
}

export default Home;
