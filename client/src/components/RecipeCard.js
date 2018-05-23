import React, { Component } from "react";
import axios from "axios";
import RecipeInfo from "./RecipeInfo";

class RecipeCard extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  loadRecipes = () => {
    axios.get("http://localhost:5000/api/recipes").then(res => {
      this.setState({ data: res.data });
    });
  };

  componentDidMount() {
    this.loadRecipes();
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <RecipeInfo data={this.state.data} />
      </div>
    );
  }
}

export default RecipeCard;
