import React, { Component } from 'react';
import Header from '../header';
import ItemToGuess from '../itemToGuess/';
import ItemsList from '../itemsList/';
import ItemDesc from '../itemDesc';
import NextBtn from '../nextBtn';
import myBirdsData from '../../data/myBirdsData';

import './app.scss';

export default class App extends Component {

  state = {
    itemId: 0,
    isGuessed: false,
    score: 0,
    isGameFinished: false,
    itemList: myBirdsData[0],
    items: myBirdsData,
  }

  render() {
    const { score, itemList } = this.state;
    return (
      <>
      <Header score={score}/>
      <ItemToGuess />
      <div className="itemsList__block">
        <ItemsList itemList={itemList}/>
        <ItemDesc />
      </div>
      <NextBtn />
      </>
    );
  }
}