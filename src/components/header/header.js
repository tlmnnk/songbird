import React, { Component } from 'react';
import quizQuestions from '../../data/quizQuestions';

import './header.scss';

export default class Header extends Component {

  generateQuizQuestions(id) {
    return quizQuestions.map((item, i) => {
      let classes = 'birdtypes__item ';
      if (id === i) {
        classes += 'birdtypes__item--active';
      }
      return (
        <li className={classes}
            key={i}>
            {item}
          </li>
      )
    });
  } 

  render() {
    const { score, id } = this.props;

    const items = this.generateQuizQuestions(id);
    return (
      <div className="header flex-colomn">
        <div className="header__block flex-between">
          <div className="logo">
            <img src="logo.svg" className="logo__img" alt="logo" srcSet=""/>
          </div>
          <div className="header__score">Score: <span>{score}</span></div>
        </div>
        <ul className="birdtypes flex-between">
          {items}
        </ul>
      </div>
    );
  }
}