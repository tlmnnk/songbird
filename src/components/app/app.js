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
    scoreTemp: 5,
    isGameFinished: false,
    items: myBirdsData,
    itemList: null,
    isColorItems: true,
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

  onItemClick = (id, e) => {
    const clickedItem = this.state.itemList.find((item) => item.id === id);
    this.setState({ clickedItem });

    let { isGuessed, scoreTemp, itemId, score } = this.state;

    if(isGuessed) {
      return;
    }

    if (itemId === id){
      score += scoreTemp;
      this.setState({ 
        isGuessed: true,
        scoreTemp: 5,
        score: score 
      });

      e.target.classList.add('correct');
      // stop audio play on correct answer
      new Audio('win.mp3').play();
    } else {
      e.target.classList.add('incorrect');
      scoreTemp -= 1;
      this.setState({ scoreTemp });
      new Audio('error.mp3').play();
    }
  }

  removeItemHighlight() {
    document.querySelectorAll('.itemList__item').forEach((item) => {
      item.classList.remove('correct', 'incorrect');
    });
  }

  nextLevelClick = () => {
    let { isGuessed, currentItemsSet, items } = this.state;
    if (isGuessed) {
      currentItemsSet += 1;
      if (currentItemsSet < items.length) {
        const shuffeledItemsSet = arrayShuffle(items[currentItemsSet]);
        console.log(shuffeledItemsSet);
        const itemToGuess = getRandomIntInRange(0, shuffeledItemsSet.length - 1);
        this.setState({
          currentItemsSet: currentItemsSet,
          isGuessed: false,
          itemList: shuffeledItemsSet,
          itemName: shuffeledItemsSet[itemToGuess].name,
          itemId: shuffeledItemsSet[itemToGuess].id,
          audio: shuffeledItemsSet[itemToGuess].audio,
          image: shuffeledItemsSet[itemToGuess].image,
        });
        this.removeItemHighlight();
      }
      else {
        this.setState({
          isGameFinished: true,
        })
      }
    } 
  }

  render() {
    const { itemId, score, itemList, itemName, audio, image, isGuessed, clickedItem, isGameFinished, currentItemsSet } = this.state;
    
    if (isGameFinished) {
      console.log('game finished');
      return (
      <>
      <h1>The game is over</h1>
      </>
      );
  }
    
    return (
      <>
      <Header score={score}
              id={currentItemsSet}/>
      <ItemToGuess 
        name={itemName}
        audio={audio}
        image={image}
        isGuessed={isGuessed}/>
      <div className="itemsList__block flex-between">
        <ItemsList itemList={itemList}
                    itemId={itemId}
                  onItemSelected={this.onItemClick}/>
        <ItemDesc clickedItem={clickedItem}/>
      </div>
      <NextBtn onNextLevel={ this.nextLevelClick }
               isGuessed={isGuessed}/>
      </>
    );
  }
}