import React, { Component } from "react";
import ReactDOM from "react-dom";

import Jumbotron from "./components/Jumbotron";
import ProductsContainer from "./components/ProductsContainer";
import { Modal } from "./components/Modal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalProps: {}
    };

    this.onModalClick = this.onModalClick.bind(this);
  }
  onModalClick(modalProps) {
    console.log('clicked');
    this.setState({
      modalProps
    })
  }

  render() {
    const { modalProps } = this.state;
    return (
      <div id="homePage">
        <Jumbotron />
        <ProductsContainer onModalClick={this.onModalClick} />
        <Modal {...modalProps} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
