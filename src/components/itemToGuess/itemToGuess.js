import React, { Component } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default class ItemToGuess extends Component {

  render() {
    let { name } = this.props;

    if (!name) {
      name = '***';
    }

    return (
      <div className="itemToGuess__wrapper">
        <div className="itemToGuess__img"></div>
        <div className="itemToGuess__block">
          <h2>{name}</h2>
          <AudioPlayer 
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"/>
        </div>
    </div>
    )
  }
}