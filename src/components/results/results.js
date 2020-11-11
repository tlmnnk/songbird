import React, { Component } from 'react';
import { MAX_SCORE } from '../../data/constants';

import './results.scss';

export default class Results extends Component {

  render() {
    const { score, playagain } = this.props;

    let congrats = `Your score ${score} out of ${MAX_SCORE} possible points`;

    if (score === MAX_SCORE) {
      congrats = `Congratulation! You got a perfect score! (${score})`;
    }

    return (
        <div className="results flex-colomn">
          <h2 className="results__header">Well done!</h2>
          <p className="results__text">{congrats}</p>
          <button className="results__btn"
                  onClick={() => playagain()}>Try again</button>
        </div>
    )
  }
}