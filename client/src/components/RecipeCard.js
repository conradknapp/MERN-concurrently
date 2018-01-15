import React, { Component } from 'react';
import axios from 'axios';
import RecipeInfo from './RecipeInfo';
import Navbar from './Navbar';
import Showcase from './Showcase';
import Footer from './Footer';

class RecipeCard extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] }; 
  }

  loadRecipes() {
    axios.get(this.props.url)
      .then(res => {
         this.setState({ data: res.data });
       });
  }

  componentDidMount() {
    this.loadRecipes();
  }

  render() {
      return (
        <div>
          <Navbar />
          <Showcase />
          <RecipeInfo data={ this.state.data } />
          <Footer />
        </div>
      )
    }
  }

export default RecipeCard;
