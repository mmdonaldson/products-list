import React, { Component } from 'react';

class ProductOverlay extends Component {

  constructor() {
    super();
    this.state = {
      height: window.innerHeight,
    }
    this.exitOverlay = this.exitOverlay.bind(this);
  }

  exitOverlay() {
    this.props.showOverlay();
  }


  render() {
    if (this.props.open === true) {
      return (
        <div className="Overlay" style={{ height: this.state.height }}>
          <div className="exit" onClick={() => this.exitOverlay()}>X</div>
          <div className="inner" id="inner" >
            <img alt={this.props.product.title} src={this.props.product.image} />
            <h1>{this.props.product.title}</h1>
            <p>{this.props.product.description}</p>
          </div>
        </div>
      );
    }
    return (
      <div />
    )
  }
}

export default ProductOverlay;
