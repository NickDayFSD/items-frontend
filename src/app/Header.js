import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

class Header extends Component {

  render() {
    return (
      <header className="Header">

        <h1>Magic Items</h1>

        <Link to={`/home`} class='myButton'> HOME </Link>
        <Link to={`/item`} class='myButton'> ITEMS </Link>
        <Link to={`/item/add`} class='myButton'> NEW </Link>

      </header>
    );
  }

}

export default Header;