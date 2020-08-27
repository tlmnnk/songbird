import React, { Component } from 'react';
import Spinner from '../spinner/spinner';

import './itemList.scss';

export default class ItemsList extends Component {

  onItemClick = (id) => {
    

  }

  generateList(itemList) {
    return itemList.map(({id, name}) => {
      return (
        <li className="itemList__item"
            key={id}
            onClick={(e) => this.props.onItemSelected(id, e)}>
          <span className="itemList__item-highlight"></span>
              {name}
          </li>
      )
    });
  }

  render() {
    const { itemList } = this.props;

    if(!itemList) {
      return <Spinner />
    }

    const items = this.generateList(itemList)

    return (
      <ul className="itemList">
      {items}
      </ul>
    );
  }
}