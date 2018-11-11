import React, { Component } from "react";

import Product from "./Product";
import productsList from "../lib/products";

class ProductsContainer extends Component {
  render() {
    return (
      <div className="container">
        <div className="card-columns">
          {productsList.map(product => (
            <Product key={`${product.category}_${product.name}`} {...product} />
          ))}
        </div>
      </div>
    );
  }
}

export default ProductsContainer;
