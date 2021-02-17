import React, { Component } from "react";
import { Container, Row, Col, Image, Spinner } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "./index.scss";
// import article from "./data.json";
import { IoLogoTwitter, IoLogoLinkedin, IoLogoFacebook } from "react-icons/io";
import { IoBookmarkOutline } from "react-icons/io5";
import Reactions from "../../components/Reactions/Reactions";
import { getArticleById } from "../../apiFunctions/articleApi";
class Read extends Component {
  state = {
    article: null,
  };
  componentDidMount() {
    this.getArticle();
  }

  getArticle = async () => {
    let urlParams = this.props.location.search;
    let id = this.props.location.search.slice(4, urlParams.length);
    let article = await getArticleById(id);
    this.setState({ article });
  };

  render() {
    return (
      <Container className="article-container">
        {this.state.article ? (
          <>
            <h1>{this.state.article.headLine}</h1>
            <Row style={{ marginTop: 20, marginBottom: 20 }}>
              <Col xs={1}>
                <Image
                  style={{ width: 50, height: 50 }}
                  src="https://miro.medium.com/fit/c/96/96/1*xVwJ4C9D1sjrRc-sR_jO0w.jpeg"
                  roundedCircle
                />
              </Col>
              <Col>
                {this.state.article.author.name}
                <p>Sep 23, 2018 · 3 min read</p>
              </Col>
              <Col>
                <div
                  style={{
                    fontSize: 24,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <IoLogoTwitter />
                  <IoLogoLinkedin />
                  <IoLogoFacebook />
                  <IoBookmarkOutline />
                </div>
              </Col>
            </Row>
            <p>{this.state.article.content}</p>
            <p>{this.state.article.content}</p>
            <p>{this.state.article.content}</p>
            <p>{this.state.article.content}</p>
            <p>{this.state.article.content}</p>
            <p>{this.state.article.content}</p>
            <Reactions
              articleId={this.state.article._id}
              claps={this.state.article.claps}
            />
          </>
        ) : (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
      </Container>
    );
  }
}

export default withRouter(Read);
