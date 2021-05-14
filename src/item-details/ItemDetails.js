import { Component } from 'react';
import Loader from '../common/Loader';
import { Link } from 'react-router-dom';
import { getItem, deleteItem } from '../utils/items-api';
import './ItemDetails.scss';

export default class ItemDetails extends Component {
  state = {
    item: null,
    loading: true
  }

  async componentDidMount() {
    const { match } = this.props;
    try {
      const item = await getItem(match.params.id);
      this.setState({ item: item });
    }
    catch (err) {
      console.log('Perception check failed. Check id and network tab.');
    }
    finally {
      this.setState({ loading: false });
    }
  }

  handleDelete = async () => {
    const { item } = this.state;
    const { history } = this.props;

    const confirmation = `Are you sure you want to delete ${item.name}?`;

    if (!window.confirm(confirmation)) { return; }

    try {
      this.setState({ loading: true });
      await deleteItem(item.id);
      history.push('/items');
    }
    catch (err) {
      console.log(err.message);
      this.setState({ loading: false });
    }
  }

  render() {
    const { item, loading } = this.state;

    if (!item) return null;

    return (
      <div className="ItemDetails">
        <Loader loading={loading} />
        <h2>Magic Item Detail Page</h2>

        <p>Name: {item.name}</p>
        <p>Type: {item.type}</p>
        <p>Rarity: {item.rarity}</p>
        <p>Requires Attunement: {item.requiresAttunement}</p>
        <p>Owner: {item.userName}</p>
        <p>Description: {item.description}</p>

        <Link to={`/items/${item.id}/edit`}>
          Edit this Item
        </Link>

        <button className="delete" onClick={this.handleDelete}>
          Delete this Magic Item
        </button>
      </div>
    );
  }

}