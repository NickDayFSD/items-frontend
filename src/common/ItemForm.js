import { Component } from 'react';
import './ItemForm.scss';

export default class ItemForm extends Component {
  state = {
    name: 'Luckstone',
    type: '',
    rarity: '',
    requiresAttunement: false,
    description: 'gives you luck'
  }

  componentDidMount() {
    const { item } = this.props;
    if (!item) { return; }
    this.setState(item);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  handleChangeName = ({ target }) => {
    this.setState({ name: target.value });
  }
  handleChangeType = ({ target }) => {
    this.setState({ type: target.value });
  }
  handleChangeRarity = ({ target }) => {
    this.setState({ rarity: target.value });
  }
  handleChangeAttune = ({ target }) => {
    this.setState({ requiresAttunement: target.checked });
  }
  handleChangeDescription = ({ target }) => {
    this.setState({ description: target.value });
  }

  render() {
    const { name, type, rarity, requiresAttunement, description } = this.state;
    const { item } = this.props;

    return (
      <form className="ItemForm" onSubmit={this.handleSubmit}>
        <p>
          <label>
            <span>Item Name</span>
            <input name="name" required placeholder="Name of the magic item..." value={name} onChange={this.handleChangeName} />
          </label>
        </p>
        <p>
          <label>
            <span>Type</span>
            <select name="type" required placeholder="Armor? Weapon? Wondrous? etc." value={type} onChange={this.handleChangeType}>
              <option value="" disabled>Armor? Weapon? Wondrous? etc.</option>
              <option>Armor</option>
              <option>Potion</option>
              <option>Ring</option>
              <option>Rod</option>
              <option>Scroll</option>
              <option>Staff</option>
              <option>Wand</option>
              <option>Weapon</option>
              <option>Wondrous</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            <span>Rarity</span>
            <select name="rarity" required placeholder="How rare is this?" value={rarity} onChange={this.handleChangeRarity}>
              <option value="" disabled>How rare is this?</option>
              <option>Common</option>
              <option>Uncommon</option>
              <option>Rare</option>
              <option>Very Rare</option>
              <option>Legendary</option>
              <option>Artifact</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            <span>Requires Attunement</span>
            <span className="vertically-centered">
              <input name="requiresAttunement" type="checkbox" value={requiresAttunement} onChange={this.handleChangeAttune} /> Yes
            </span>
          </label>
        </p>
        <p>
          <label>
            <span>Description</span>
            <input name="description" required placeholder="Appearance, origin, function, whatever should be known shall be recorded here." value={description} onChange={this.handleChangeDescription} />
          </label>
        </p>
        <p>
          <button>{item ? 'Update' : 'Add'} Item</button>
        </p>
      </form>
    );
  }

}
