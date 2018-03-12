import React, { Component } from "react";
import "../style.css";
import { Link } from "react-router-dom";

class RecipeInfo extends Component {
  render() {
    let commentNodes = this.props.data.map(comment => {
      return (
        <div
          key={comment._id}
          style={{
            background: `url(${comment.imageUrl}) 50% 50% / cover no-repeat`
          }}
          className="Card"
        >
          <span className={comment.postType}>{comment.postType}</span>
          <div className="CardText">
            <Link to={`/recipes/${comment._id}`}>
              <p>{comment.recipeName}</p>
            </Link>
          </div>
        </div>
      );
    });
    return <div className="Cards">{commentNodes}</div>;
  }
}

export default RecipeInfo;
