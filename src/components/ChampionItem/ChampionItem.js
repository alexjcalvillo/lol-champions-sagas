import React, { Component } from 'react';
import { connect } from 'react-redux';

// import custom styling
import styles from './ChampionItem.module.css';

class ChampionItem extends Component {
  render() {
    return (
      <div className={styles.item}>
        <img
          onClick={this.props.clickChampion(this.props.champion.id)}
          src={this.props.champion.images}
          alt="headshot of champion as display in game client"
        />

        <h2
          style={{
            fontSize: '3rem',
            margin: '0',
            padding: '0',
            fontWeight: '400',
          }}
        >
          {this.props.champion.name}
        </h2>
        <h6 style={{ paddingTop: '0', margin: '0' }}>
          {this.props.champion.title}
        </h6>
      </div>
    );
  }
}

export default connect()(ChampionItem);
