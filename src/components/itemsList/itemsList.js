import React, { Component } from 'react';
import Spinner from '../spinner/spinner';

export default class ItemsList extends Component {

  generateList(itemList) {
    return itemList.map(({id, name}) => {
      return (
        <li className="itemList__item"
            key={id}
            onClick={() => this.props.onItemSelected(id)}>{name}</li>
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