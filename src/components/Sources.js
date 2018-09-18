import React, { Component } from "react";
import axios from "axios";

class Sources extends Component {
  constructor(props) {
    super(props);
    this.state = { listOfSources: [] };
    this.get_sources();
  }
  get_sources(event) {
    const url =
      "https://newsapi.org/v2/sources?apiKey=9e1cd567b583404ab26ca4d875e6b41a";
    axios.get(url).then(response => {
      const allSources = [];
      response.data.sources.forEach(function(source) {
        allSources.push(source.name);
      });
      this.setState({
        listOfSources: allSources
      });
    });
  }

  render() {
    const sourceLi = this.state.listOfSources.map(source => (
      <li key={source}>
        <button>Get stories from {source}</button>
      </li>
    ));
    return (
      <div className="App">
        <ol>{sourceLi}</ol>
      </div>
    );
  }
}

export default Sources;
