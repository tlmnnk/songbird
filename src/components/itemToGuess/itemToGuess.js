import React, { Component } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import './itemToGuess.scss';

export default class ItemToGuess extends Component {

  render() {
    let { name, isGuessed, audio, image } = this.props;

    if (!isGuessed) {
      name = '* * *';
      image = "bird.jpg";
    } else {
      audio = 'win.mp3';
    }

    return (
      <div className="itemToGuess__wrapper flex-between">
          <img className="itemToGuess__img" src={image} alt={name}/>
        <div className="itemToGuess__block">
          <h2>{name}</h2>
          <AudioPlayer
            id='player'
            src={audio}
            autoPlayAfterSrcChange={false}/>
        </div>
    </div>
    )
  }
}