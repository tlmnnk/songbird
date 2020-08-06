import React, { Component } from 'react';

export default class Header extends Component {

  componentDidUpdate() {

  }

  render() {
    const { score } = this.props;
    return (
      <div className="header">
        <div className="header__block">
          <div className="logo">logo
            <img src="" alt="" srcSet=""/>
          </div>
          <div className="header__score">Score: <span>{score}</span></div>
        </div>
        <ul className="birdtypes">
          <li className="birdtypes__item">Разминка</li>
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