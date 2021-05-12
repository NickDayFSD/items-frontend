import { Component } from 'react';
import { getItems } from '../utils/items-api';
import ItemList from './ItemList';
import './ItemPage.scss';

export default class ItemPage extends Component {
  state = {
    items: []
  }

  async componentDidMount() {
    const items = await getItems();
    if (items) {
      this.setState({ items: items });
    } else {
      console.log('Perception check failed; check network tab.');
    }
  }

  render() {
    const { items } = this.state;

    return (
      <div className="ItemPage">
        <h2>List of Magic Items</h2>

        <ItemList items={items} />

      </div>
    );
  }

}