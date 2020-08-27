import React, { Component } from 'react';
import { MAX_SCORE } from '../../data/constants';

import './results.scss';

export default class Results extends Component {

  render() {
    const { score, playagain } = this.props;

    let congrats = `Вы прошли викторину и набрали ${score} из ${MAX_SCORE} возможных баллов`;

    if (score === MAX_SCORE) {
      congrats = `Абсолютная победа! Вы набрали максимальное количество баллов! (${score})`;
    }

    return (
        <div className="results flex-colomn">
          <h2 className="results__header">Поздравляем!</h2>
          <p className="results__text">{congrats}</p>
          <button className="results__btn"
                  onClick={() => playagain()}>Попробовать еще раз</button>
        </div>
    )
  }
}