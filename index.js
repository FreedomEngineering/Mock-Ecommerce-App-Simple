import React, { Component } from "react";
import ReactDOM from "react-dom";

import Jumbotron from "./components/Jumbotron";
import ProductsContainer from "./components/ProductsContainer";

class App extends Component {
  render() {
    return (
      <div id="homePage">
        <Jumbotron />
        <ProductsContainer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
