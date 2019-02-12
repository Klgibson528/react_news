import React, { Component } from "react";
import "./App.css";
import Sources from "./components/Sources";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Sources />
      </div>
    );
  }
}

export default App;
