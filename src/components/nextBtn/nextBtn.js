import React, { Component } from 'react';

export default class NextBtn extends Component {

  render() {
    const { onNextLevel } = this.props; 
    return <button className="nextBtn"
                   onClick={onNextLevel} >Next Level</button>
  }
}