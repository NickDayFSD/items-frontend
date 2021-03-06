import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Item.scss';

export default class Item extends Component {

  render() {
    const { item } = this.props;

    return (
      <div className="Item">

        <h2>{item.name}</h2>
        <p>{item.type}</p>
        <p>{item.rarity}</p>
        <Link to={`/item-details/${item.id}`}>
          Details
        </Link>
      </div>
    );
  }

}