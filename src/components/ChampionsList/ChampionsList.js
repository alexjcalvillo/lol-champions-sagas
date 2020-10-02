import React from 'react';
import { connect } from 'react-redux';
import ChampionItem from '../ChampionItem/ChampionItem';

// import customs styling
import styles from './ChampionsList.module.css';

class ChampionsList extends React.Component {
  render() {
    return (
      <div className={styles.list}>
        {this.props.store.championsReducer.map((champion, i) => {
          return (
            <ChampionItem
              key={i}
              champion={champion}
              clickChampion={this.props.clickChampion}
            />
          );
        })}
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(ChampionsList);
