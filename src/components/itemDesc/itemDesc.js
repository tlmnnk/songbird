import React, { Component } from 'react';
import AudioPlayer from 'react-h5-audio-player';

export default class ItemDesc extends Component {

  render() {

    if(!this.props.clickedItem) {
      return (
          <div className="itemDesc">Послушайте плеер.
          Выберите птицу из списка</div>
      )
    }

    const { name, species, audio, description } = this.props.clickedItem;

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
              src={audio}
              autoPlayAfterSrcChange={false}/>
        </div>
        <div className="itemDesc__text">{description}</div>
      </div>
      </div>
    );
  }
}