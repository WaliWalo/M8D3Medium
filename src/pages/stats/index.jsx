import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { getArticles } from "../../apiFunctions/articleApi";

export default class Stats extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = async () => {
    let articles = await getArticles();
    console.log(articles);
    this.setState({ articles });
  };

  render() {
    return (
      <Container>
        <p>List your total articles</p>
        <p>List your total claps</p>
        <p>List your total comments</p>
      </Container>
    );
  }
}
