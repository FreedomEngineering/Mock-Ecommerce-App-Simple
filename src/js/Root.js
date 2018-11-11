import React, { Component } from "react";

import Jumbotron from "./components/Jumbotron";
import ProductsContainer from "./components/ProductsContainer";
import { Modal } from "./components/Modal";

class App extends Component {
  constructor(props) {
    super(props);
    this.onModalClick = this.onModalClick.bind(this);
    this.handleCartButtonClick = this.handleCartButtonClick.bind(this);
    this.getCart = this.getCart.bind(this);

    const cart = this.getCart();

    this.state = {
      modalProps: {},
      cart
    };
  }

  getCart() {
    const serializedCart = window.localStorage.getItem("cart");
    let cart;
    if (!serializedCart) {
      cart = [];
    } else {
      cart = JSON.parse(serializedCart);
    }
    return cart;
  }

  handleCartButtonClick(id) {
    const { cart } = this.state;

    const existingItemIndex = cart.indexOf(id);
    const isItemInCart = existingItemIndex > -1;
    let newCart;
    if (isItemInCart) {
      newCart = cart
        .slice(0, existingItemIndex)
        .concat(cart.slice(existingItemIndex + 1));
    } else {
      newCart = cart.concat(id);
    }

    this.setState({ cart: newCart }, () =>
      window.localStorage.setItem("cart", JSON.stringify(newCart))
    );
  }

  onModalClick(modalProps) {
    this.setState({
      modalProps
    });
  }

  render() {
    const { modalProps, cart } = this.state;
    return (
      <div id="homePage">
        <Jumbotron />
        <ProductsContainer onModalClick={this.onModalClick} />
        <Modal
          {...modalProps}
          cart={cart}
          handleCartButtonClick={this.handleCartButtonClick}
        />
      </div>
    );
  }
}

export default App;
