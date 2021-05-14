import { Component } from 'react';
import './Loader.scss';

export default class Loader extends Component {

  render() {
    const { loading } = this.props;
    if (!loading) return null;

    return (
      <div className="Loader">
        <img src="https://cdn.shopify.com/s/files/1/1634/0113/products/export_600x.gif?v=1589379773" alt="loading" />
      </div>
    );
  }

}