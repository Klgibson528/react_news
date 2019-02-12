import React, { Component } from "react";
import Titles from "./Titles";
import axios from "axios";

class Sources extends Component {
  constructor(props) {
    super(props);
    this.state = { listOfSources: [], sourceId: "", titles: [] };
    this.get_sources();
    this.get_titles("abc-news");
  }
  get_sources() {
    const url =
      "https://newsapi.org/v2/sources?apiKey=9e1cd567b583404ab26ca4d875e6b41a";
    axios.get(url).then(response => {
      this.setState({
        listOfSources: response.data.sources,
        sourceId: "",
        visible: false
      });
    });
  }

  set_sourceId(event) {
    this.get_titles(this.state.sourceId);
  }

  setCurrentSource(e) {
    this.setState({ sourceId: e.target.value });
  }

  get_titles(newId) {
    const url =
      "https://newsapi.org/v2/top-headlines?apiKey=9e1cd567b583404ab26ca4d875e6b41a";
    const sourceId = newId;

    axios
      .get(url, {
        params: {
          sources: sourceId
        }
      })
      .then(response => {
        const allArticles = [];

        response.data.articles.forEach(function(title) {
          allArticles.push(title);
        });
        this.setState({
          titles: allArticles
        });
      });
  }
  render() {
    const popup = (
      <Titles titles={this.state.titles} sourceId={this.state.sourceId} />
    );

    const sourceLi = this.state.listOfSources.map(source => (
      <option key={source.id} value={source.id}>
        {source.name}
      </option>
    ));
    return (
      <div className="App">
        <h1>Choose a News Site</h1>

        <select onChange={this.setCurrentSource.bind(this)}>{sourceLi}</select>
        <button onClick={this.set_sourceId.bind(this)}>View Articles</button>
        {popup}
      </div>
    );
  }
}

export default Sources;
