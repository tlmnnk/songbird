import React, { Component } from 'react';
import Header from '../header';
import ItemToGuess from '../itemToGuess/';
import ItemsList from '../itemsList/';
import ItemDesc from '../itemDesc';
import NextBtn from '../nextBtn';
import myBirdsData from '../../data/myBirdsData';
import { arrayShuffle, getRandomIntInRange } from '../../helpers';

import './app.scss';

export default class App extends Component {

  state = {
    itemId: 0,
    currentItemsSet: 0,
    itemName: null,
    isGuessed: false,
    score: 0,
    isGameFinished: false,
    items: myBirdsData,
    itemList: null,
  }

  componentDidMount() {
    const { currentItemsSet, items } = this.state;
    const shuffeledItemsSet = arrayShuffle(items[currentItemsSet]);
    const itemToGuess = getRandomIntInRange(0, shuffeledItemsSet.length - 1);
    this.setState({
      itemList: shuffeledItemsSet,
      itemName: shuffeledItemsSet[itemToGuess].name,
      itemId: shuffeledItemsSet[itemToGuess].id,
      audio: shuffeledItemsSet[itemToGuess].audio,
      image: shuffeledItemsSet[itemToGuess].image,
    });
  }

  onItemClick = (id) => {
    const clickedItem = this.state.itemList.find((item) => item.id === id);
    this.setState({ clickedItem });
  }

  render() {
    const { score, itemList, itemName, audio, image, isGuessed, clickedItem } = this.state;
    return (
      <>
      <Header score={score}/>
      <ItemToGuess 
        name={itemName}
        audio={audio}
        image={image}
        isGuessed={isGuessed}/>
      <div className="itemsList__block">
        <ItemsList itemList={itemList}
                    onItemSelected={this.onItemClick}/>
        <ItemDesc clickedItem={clickedItem}/>
      </div>
      <NextBtn />
      </>
    );
  }
}