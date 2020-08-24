import React, { Component } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default class ItemToGuess extends Component {

  render() {
    let { name, isGuessed, audio, image } = this.props;

    if (!isGuessed) {
      name = '***';
      image = "bird.jpg";
    } else {
      audio = 'win.mp3';
    }

    return (
      <div className="itemToGuess__wrapper">
        <div className="itemToGuess__img">
          <img src={image}/>
        </div>
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