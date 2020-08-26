import React, { Component } from 'react';
import Header from '../header';
import ItemToGuess from '../itemToGuess/';
import ItemsList from '../itemsList/';
import ItemDesc from '../itemDesc';
import NextBtn from '../nextBtn';
import Results from '../results';
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
    this.newRound();
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
      if (e.target.classList.contains('itemList__item-highlight')) {
        e.target.parentNode.classList.add('correct');
        new Audio('win.mp3').play();
        return;
      }
      e.target.classList.add('correct');
      new Audio('win.mp3').play();
    } else {
      if(e.target.classList.contains('incorrect') || e.target.parentNode.classList.contains('incorrect')) {
        return;
      }
      if (e.target.classList.contains('itemList__item-highlight')) {
        e.target.parentNode.classList.add('incorrect');
      } else {
        e.target.classList.add('incorrect');
      }
      
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

  newRound(currentItemsSetArg) {
    let { currentItemsSet, items, isGameFinished, score } = this.state;

    if (currentItemsSetArg) {
      currentItemsSet = currentItemsSetArg;
    }

    const shuffeledItemsSet = arrayShuffle(items[currentItemsSet]);
    const itemToGuess = getRandomIntInRange(0, shuffeledItemsSet.length - 1);
    this.setState({
      currentItemsSet: currentItemsSet,
      clickedItem: null,
      isGuessed: false,
      isGameFinished: false,
      score: isGameFinished ? 0 : score,
      itemList: shuffeledItemsSet,
      itemName: shuffeledItemsSet[itemToGuess].name,
      itemId: shuffeledItemsSet[itemToGuess].id,
      audio: shuffeledItemsSet[itemToGuess].audio,
      image: shuffeledItemsSet[itemToGuess].image,
    });
    console.log('Правильный ответ:', shuffeledItemsSet[itemToGuess].name);
  }

  nextLevelClick = () => {
    let { isGuessed, currentItemsSet, items } = this.state;
    if (isGuessed) {
      currentItemsSet += 1;
      if (currentItemsSet < items.length) {
        this.newRound(currentItemsSet)
        this.removeItemHighlight();
      }
      else {
        this.setState({
          isGameFinished: true,
          currentItemsSet: 0,
        })
      }
    } 
  }

  playAgain = () => {
    this.newRound();
}

  render() {
    const { itemId, score, itemList, itemName, audio, image, isGuessed, clickedItem, isGameFinished, currentItemsSet } = this.state;
    
    if (isGameFinished) {
      return (
        <>
      <Header score={score}
              id={currentItemsSet}/>
      <Results score={score}
               playagain={this.playAgain}/>
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