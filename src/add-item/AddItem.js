import { Component } from 'react';
import { addItem } from '../utils/items-api';
import ItemForm from '../common/ItemForm';
import './AddItem.scss';

export default class AddItem extends Component {
  state = {
    loading: false
  }

  handleAdd = async itemToAdd => {
    const { history } = this.props;

    try {
      this.setState({ loading: true });
      const newItem = await addItem(itemToAdd);
      history.push(`/item-details/${newItem.id}`);
    }
    catch (err) {
      this.setState({ loading: false });
      console.log(err.message);
    }
  }

  render() {

    return (
      <div className="AddItem">
        <h2>Add a Magic Item</h2>
        <ItemForm onSubmit={this.handleAdd} />
      </div>
    );
  }

}