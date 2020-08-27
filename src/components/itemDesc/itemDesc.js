import React, { Component } from 'react';
import AudioPlayer from 'react-h5-audio-player';

import './itemDesc.scss'

export default class ItemDesc extends Component {

  render() {

    if(!this.props.clickedItem) {
      return (
          <div className="itemDesc">Послушайте плеер.
          Выберите игру из списка</div>
      )
    }

    const { name, species, audio, description, image } = this.props.clickedItem;

    return (
      <div className="itemDesc">
        <div className="itemDesc__block flex-between">
          <div className="itemDesc__pre flex-between">
          <div className="itemDesc__img">
            <img src={image} alt={name}/>
          </div>
          <div className="itemDesc__section">
            <h4 className="itemDesc__name">{name}</h4>
            <p className="itemDesc__species">{species}</p>
            <AudioPlayer 
              src={audio}
              autoPlayAfterSrcChange={false}/>
        </div>
          </div>
        <div className="itemDesc__text">{description}</div>
      </div>
      </div>
    );
  }
}