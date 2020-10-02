import React from 'react';
import { connect } from 'react-redux';

class ChampionsList extends React.Component {
  render() {
    const championsListHtmlArray = this.props.store.championsReducer.map(
      (item, i) => {
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
      }
    );
    return (
      <div>
        <h3>This is the ChampionsList</h3>
        {championsListHtmlArray}
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(ChampionsList);
