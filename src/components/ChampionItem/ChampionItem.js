import React, { Component } from 'react';

// import custom styling
import styles from './ChampionItem.module.css';

class ChampionItem extends Component {
  render() {
    return (
      <>
        {this.props.champions.map((item, i) => {
          return (
            <div key={i} className={styles.item}>
              <img
                src={item.images}
                alt="headshot of champion as display in game client"
              />
              <h3>{item.name}</h3>
              <h4>{item.title}</h4>
            </div>
          );
        })}
      </>
    );
  }
}

export default ChampionItem;
