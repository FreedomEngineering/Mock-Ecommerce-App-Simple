import React, { Component } from "react";

import Product from "./Product";
import productsList from "../lib/products";

class ProductsContainer extends Component {
  render() {
    const { onModalClick } = this.props;
    return (
      <div className="container">
        <div className="card-columns">
          {productsList.map(product => (
            <Product key={`${product.category}_${product.name}`} {...product} onModalClick={onModalClick} />
          ))}
        </div>
      </div>
    );
  }
}

export default ProductsContainer;
