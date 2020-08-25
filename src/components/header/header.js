import React, { Component } from 'react';

import './header.scss';

export default class Header extends Component {

  componentDidUpdate() {

  }

  render() {
    const { score } = this.props;
    return (
      <div className="header flex-colomn">
        <div className="header__block flex-between">
          <div className="logo">
            <img src="logo.svg" className="logo__img" alt="logo" srcSet=""/>
          </div>
          <div className="header__score">Score: <span>{score}</span></div>
        </div>
        <ul className="birdtypes flex-between">
          <li className="birdtypes__item birdtypes__item--active">Разминка</li>
          <li className="birdtypes__item">Воробьиные</li>
          <li className="birdtypes__item">Лесные птицы</li>
          <li className="birdtypes__item">Певчие Птицы</li>
          <li className="birdtypes__item">Хищные птицы</li>
          <li className="birdtypes__item">Морские птицы</li>
        </ul>
      </div>
    );
  }
}