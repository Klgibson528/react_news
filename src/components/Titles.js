import React, { Component } from "react";
import axios from "axios";

class Titles extends Component {
    constructor(props) {
      super(props);
      this.state = { titles: [] };
      this.get_titles();
    }
    get_titles(event) {
        const url =
          "https://newsapi.org/v2/top-headlines?apiKey=9e1cd567b583404ab26ca4d875e6b41a" 
        const source = 'bbc-news';
        axios.get(url, {
            params: {
                sources: source
            }
        }).then(response => {
          const allTitles = [];
          response.data.articles.forEach(function(title) {
            allTitles.push(title.title);
          });
          this.setState({
            titles: allTitles
          });
        });
      }
    
      render() {
        const titleLi = this.state.titles.map(title => (
          <li key={title}>
            <a href='#'> {title}</a>
          </li>
        ));
        return (
          <div className="App">
            <ol>{titleLi}</ol>
          </div>
        );
      }

}

export default Titles