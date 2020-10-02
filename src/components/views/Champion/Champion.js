import React, { Component } from 'react';
import { connect } from 'react-redux';

// import custom styles
import styles from './Champion.module.css';

class Champion extends Component {
  state = {
    champion: {
      types: [],
    },
  };
  componentDidMount() {
    let currentId = Number(this.props.match.params.id);
    let currentChampion = {};

    for (let champion of this.props.store.championsReducer) {
      if (currentId === champion.id) {
        currentChampion = champion;
      }
    }

    this.setState({
      champion: currentChampion,
    });
  }

  backClicked = () => {
    this.props.history.push('/');
  };

  render() {
    const typesArray = this.state.champion.types
      ? this.state.champion.types.map((item, i) => {
          return (
            <span style={{ marginRight: '5px' }}>{item.toUpperCase()}</span>
          );
        })
      : [];

    return (
      <div className={styles.currentChampion}>
        <div>
          <button onClick={this.backClicked}>Back</button>
        </div>
        <img src={this.state.champion.images} alt="headshot from LOL client" />
        <h1>{this.state.champion.name}</h1>
        <h6>{typesArray}</h6>
        <br />
        <p>{this.state.champion.details}</p>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Champion);
