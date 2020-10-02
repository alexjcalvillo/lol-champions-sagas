import React, { Component } from 'react';
import { connect } from 'react-redux';

// import custom styling
import styles from './ChampionItem.module.css';

class ChampionItem extends Component {
  render() {
    return (
      <div
        className={styles.item}
        onClick={this.props.clickChampion(this.props.champion.id)}
      >
        <img
          src={this.props.champion.images}
          alt="headshot of champion as display in game client"
        />
        <h3>{this.props.champion.name}</h3>
        <h4>{this.props.champion.title}</h4>
      </div>
    );
  }
}

export default connect()(ChampionItem);
