import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  render() {
    return (
      <div>
        <h1 id="welcomeBanner" className="blue">
          Hello World
        </h1>
        <p className="blue">I am blue</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
