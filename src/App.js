import React, { Component } from "react";
import "./App.css";
import Sources from './components/Sources';
import Titles from './components/Titles';

class App extends Component {
render() {
   return (
     <div>
       <h1>List of News Sites</h1>
       <Titles/>
       <Sources />
     </div>
   )
  }
}

export default App;
