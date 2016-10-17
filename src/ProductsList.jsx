import React, { Component } from 'react';
import ProductOverlay from './ProductOverlay.jsx';
import ProductsFile from './products.json';

const products = ProductsFile;

class ProductsList extends Component {

  constructor() {
    super();
    this.state = {
      load: 10,
      total: products.length,
      open: false,
      product: null
    };
    this.showProducts = this.showProducts.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.loadButton = this.loadButton.bind(this);
    this.showOverlay = this.showOverlay.bind(this);
  }

  showOverlay(activeProduct) {
    this.setState({
      open: !this.state.open,
      product: activeProduct
    });
    console.log(activeProduct);
  }

  loadMore() {
    this.setState({
      load: this.state.load + 5
    });
  }

  showProducts() {
    return products.map((product) => {
      if (product.id > this.state.load) {
        return <div />;
      }
      return (
        <div className="Product" key={product.id} onClick={() => this.showOverlay(product)}>
          <img alt={product.title} src={product.image} />
          <h1>{product.title}</h1>
        </div>
      );
    });
  }

  loadButton() {
    if (this.state.total === this.state.load) {
      return (
        <h4>No more products!</h4>
      );
    } else {
      return (
        <button onClick={() => this.loadMore()}>Load more</button>
      );
    }
  }

  render() {
    return (
      <div className="container">
        <div className="ProductsList">
          { this.showProducts() }
        </div>
        <div className="LoadButton">
          { this.loadButton() }
        </div>
        <ProductOverlay open={this.state.open} product={this.state.product} showOverlay={this.showOverlay} />
      </div>
    );
  }
}

export default ProductsList;
