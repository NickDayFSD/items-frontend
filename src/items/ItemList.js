import { Component } from 'react';
import './ItemList.scss';
import Item from './Item';

export default class ItemList extends Component {

  render() {
    const { items } = this.props;

    return (
      <ul className="ItemList">
        {items.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    );
  }

}