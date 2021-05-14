import { Component } from 'react';
import ItemForm from '../common/ItemForm';
import { updateItem, getItem } from '../utils/items-api';
import './EditItem.scss';

export default class EditItem extends Component {
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

  handleEdit = async itemToEdit => {
    const { history } = this.page;

    try {
      this.setState({ loading: true });
      const updatedItem = await updateItem(item);
      history.push(`/items/${updatedItem.id}`);
    }
    catch (err) {
      console.log(err.message);
      this.setState({ loading: false });
    }
  }

  render() {
    const { item } = this.state;
    return (
      <div className="EditItem">
        <h2>Edit Item</h2>

        {item && <ItemForm item={item} onSubmit={this.handleEdit} />}
      </div>
    );
  }

}