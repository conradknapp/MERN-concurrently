import React, { Component } from "react";
import axios from "axios";
import CalendarIcon from "./CalendarIcon";
import TagsIcon from "./TagsIcon";
import MailIcon from "./MailIcon";
import { withRouter } from "react-router-dom";

class RecipeDetails extends Component {
  state = {
    details: ""
  };

  componentWillMount() {
    this.getRecipe();
  }

  getRecipe = () => {
    const { id } = this.props.match.params;
    axios
      .get(`http://localhost:5000/api/recipes/${id}`)
      .then(({ data }) => {
        console.log(data);
        this.setState({ details: data });
      })
      .catch(err => console.error(err));
  };

  render() {
    const {
      recipeName,
      date,
      postType,
      imageUrl,
      ingredients,
      instructions,
      summary
    } = this.state.details;
    return (
      <div>
        <div
          style={{
            background: `url(${imageUrl}) 50% 50% / cover no-repeat`
          }}
          className="RecipeShowcase"
        />
        <div className="ArticleContainer">
          <main className="Article">
            <div className="ArticleTop">
              <h1>{recipeName}</h1>
              <h3 className="Article__Info">
                <CalendarIcon />
                {new Date(date).toDateString().slice(4)}
              </h3>
              <h4 className="Article__Info">
                <TagsIcon />#{postType}
              </h4>
              <h4 className="Article__Info">
                <MailIcon />
                <a
                  href={`mailto:?Subject=${recipeName}&body=${ingredients}${instructions}`}
                >
                  Email this recipe
                </a>
              </h4>
            </div>
            <hr />
            <blockquote>{summary}</blockquote>
            <div dangerouslySetInnerHTML={{ __html: ingredients }} />
            <div dangerouslySetInnerHTML={{ __html: instructions }} />
          </main>
        </div>
      </div>
    );
  }
}

export default withRouter(RecipeDetails);
