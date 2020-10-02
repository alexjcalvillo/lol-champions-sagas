import React, { Component } from 'react';

class ChampionItem extends Component {
  render() {
    return (
      <div>
        {this.props.champions.map((item, i) => {
          return (
            <div key={i}>
              <img
                src={item.images}
                alt="headshot of champion as display in game client"
              />
              <h3>{item.name}</h3>
              <h4>{item.title}</h4>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ChampionItem;
