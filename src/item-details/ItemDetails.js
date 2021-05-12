import { Component } from 'react';
import { getItem } from '../utils/items-api';
import './ItemDetails.scss';

export default class ItemDetails extends Component {
  state = {
    item: null
  }

  async componentDidMount() {
    const { match } = this.props;
    const item = await getItem(match.params.id);
    if (item) {
      this.setState({ item: item });
    } else {
      console.log('Perception check failed. Check id and network tab.');
    }
  }

  render() {
    const { item } = this.state;

    if (!item) return null;

    return (
      <div className="ItemDetails">
        <h2>Magic Item Detail Page</h2>

        <p>Name: {item.name}</p>
        <p>Type: {item.type}</p>
        <p>Rarity: {item.rarity}</p>
        <p>Requires Attunement: {item.requiresAttunement}</p>
        <p>Owner: {item.userName}</p>
        <p>Description: {item.description}</p>
      </div>
    );
  }

}