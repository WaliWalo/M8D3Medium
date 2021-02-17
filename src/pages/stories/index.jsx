import React, { Component } from "react";
import { Button, Container, ListGroup } from "react-bootstrap";
import { deleteArticle, getArticles } from "../../apiFunctions/articleApi";

export default class Stories extends Component {
  state = { articles: [], modified: 0 };
  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = async () => {
    let articles = await getArticles();
    console.log(articles);
    this.setState({ articles });
  };

  handleRemoveArticle = async (e) => {
    console.log(e.target.id);
    let response = await deleteArticle(e.target.id);
    console.log(response);
    let modified = this.state.modified + 1;
    this.setState({ modified });
    alert(`${response.headLine} removed`);
  };

  componentDidUpdate(prevProp, prevState) {
    if (prevState.modified !== this.state.modified) {
      this.fetchArticles();
    }
  }

  handleUpdateArticle(e) {
    this.props.history.push(`/new-story?id=${e.target.id}`);
  }

  render() {
    return (
      <Container>
        <ListGroup>
          {this.state.articles.map((article) => (
            <ListGroup.Item>
              {article.headLine}{" "}
              <Button
                id={article._id}
                onClick={(e) => this.handleRemoveArticle(e)}
                className="my-3"
                variant="danger"
              >
                DELETE
              </Button>
              <Button
                id={article._id}
                onClick={(e) => this.handleUpdateArticle(e)}
              >
                Update
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    );
  }
}
