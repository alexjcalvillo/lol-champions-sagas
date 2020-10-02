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
            <span key={i} style={{ marginRight: '5px', display: 'inline' }}>
              {item.toUpperCase()}
            </span>
          );
        })
      : [];

    return (
      <div className={styles.currentChampion}>
        <div
          style={{ display: 'block', marginBottom: '35px', textAlign: 'left' }}
        >
          <button className="backBtn" onClick={this.backClicked}>
            BACK
          </button>
        </div>
        <div className={styles.displayBox}>
          <div className={styles.displayGrid}>
            <div
              style={{
                flex: 1,
                borderRight: '1px solid #767676',
                borderLeft: '1px solid #767676',
              }}
            >
              <img
                src={this.state.champion.images}
                alt="headshot from LOL client"
              />
              <h1>{this.state.champion.name}</h1>
            </div>
            <div
              style={{
                flex: 2,
                padding: '8px 45px',
                marginTop: '0',
                textAlign: 'left',
                borderRight: '1px solid #767676',
              }}
            >
              <p
                style={{
                  color: 'white',
                  fontSize: '0.9em',
                  fontWeight: '200',
                  letterSpacing: '0.06rem',
                }}
              >
                {this.state.champion.details}
              </p>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div className={styles.identify}>
              <h3>{this.state.champion.title}</h3>
              <h4 style={{ display: 'inline' }}>
                <span style={{ textDecoration: 'underline' }}>Types</span>:{' '}
              </h4>
              {typesArray}
            </div>
            <div style={{ flex: 2 }}></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Champion);
