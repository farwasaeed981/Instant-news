import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      page:1
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=02d5e1a1b30d453db0b06936663aaa96&page=1";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }

  handleOnPrevious= async() =>{
    console.log("previous");
    let url =
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=02d5e1a1b30d453db0b06936663aaa96&page=${this.state.page - 1}`;
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
  this.setState({ articles: parsedData.articles });
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
  }
  
  handleOnNext= async() =>{
    console.log("next");
    let url =
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=02d5e1a1b30d453db0b06936663aaa96&page=${this.state.page + 1}`;
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
    })
  }

  render() {
    return (
      <div className="container my-5">
        <h2>Top Headlines - Today</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 25) : ""}
                  description={element.description ? element.description.slice(0, 68): ""}
                  imgUrl={element.urlToImage}
                  url={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handleOnPrevious}>&larr; Previous</button>
        <button type="button" class="btn btn-dark" onClick={this.handleOnNext}>Next &rarr;</button>
        </div>
      </div>
      
    );
  }
}

export default News;
