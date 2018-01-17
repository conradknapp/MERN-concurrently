import React, { Component } from 'react';
import '../style.css';
import { NavLink as Link } from 'react-router-dom';
// import Comment from './Comment';

class RecipeInfo extends Component {
  render() {
    let commentNodes = this.props.data.map(comment => {
      return (
          <div key={ comment._id } style={ { background: `url(${comment.text}) 50% 50% / cover no-repeat` } } className="Card">
          <span className={comment.postType}>{comment.postType}</span>
            <div className="CardText">
            <Link to={`/recipes/${comment._id}`}>
              <p>{ comment.author }</p>
            </Link>
            </div>
          </div>
      )
    })
    return (
      <div className="Cards">
        { commentNodes }
      </div>
    )
  }
}

export default RecipeInfo;
