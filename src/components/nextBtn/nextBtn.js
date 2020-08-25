import React, { Component } from 'react';

import './nextBtn.scss';

export default class NextBtn extends Component {

  render() {
    const { onNextLevel, isGuessed } = this.props;
    let classes = 'nextBtn ';
    if (isGuessed) {
      classes += 'nextBtn--active';
    }
    return <button className={classes}
                   onClick={onNextLevel} >Next Level</button>
  }
}