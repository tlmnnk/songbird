import React, { Component } from 'react';
import AudioPlayer from 'react-h5-audio-player';

export default class ItemDesc extends Component {

  render() {

    const { name, species, description } = this.props;

    return (
      <div className="itemDesc">
        <div className="itemDesc__block">
          <div className="itemDesc__img"></div>
          <div className="itemDesc__section">
            <h4 className="itemDesc__name">{name}</h4>
            <br></br>
            <p className="itemDesc__species">{species}</p>
            <br></br>
            <AudioPlayer 
              src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"/>
        </div>
        <div className="itemDesc__text">{description}</div>
      </div>
      </div>
    );
  }
}