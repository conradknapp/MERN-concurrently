import React, { Component } from 'react';
import axios from 'axios';
import '../style.css';

class RecipeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: ''
    }
  }

  componentWillMount() {
    this.getRecipe();
  }

  getRecipe() {
    const recipeId = this.props.match.params.id;
    axios.get(`http://localhost:5000/api/recipes/${recipeId}`)
      .then(res => {
        this.setState({details: res.data})
      })
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div>
        <div style={{ background: `url(${this.state.details.imageUrl}) 50% 50% / cover no-repeat` }} className="RecipeShowcase"></div>
        <div className="ArticleContainer">
        <main className="Article">
          <h1>{this.state.details.recipeName}</h1>
          <h4>Tags: #{this.state.details.postType}</h4>
          <h5>{this.state.details.date}</h5>
          <hr />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum aut <a className="ArticleLink">assumenda</a> beatae fuga ex, adipisci ullam dignissimos excepturi doloremque dolor dolores illo rem. Delectus accusantium reprehenderit ipsam autem consequatur fugiat et maxime. Distinctio laudantium tempore quas qui, quae dicta debitis, eveniet omnis aperiam eligendi, est fugiat! Beatae, dolor eius eveniet tempore tempora reiciendis facere voluptatibus explicabo. Perferendis cum omnis exercitationem pariatur sunt excepturi in quaerat. Rem nobis accusantium itaque odit minima? Quisquam facere hic libero! Sunt dolorem hic nam in architecto quam, quos voluptatibus error reprehenderit repellendus amet porro asperiores sapiente, exercitationem culpa saepe! Ipsum fugiat consequuntur quis repudiandae dolores?</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, ex aut consectetur, ullam eligendi iusto fuga atque aperiam tempora asperiores unde eum iure iste eaque harum minima aliquid omnis ea mollitia perspiciatis ducimus praesentium soluta. Eum ducimus voluptatum ab molestias qui, recusandae officia fuga illum dolore repellat adipisci minima sit explicabo, cum excepturi quas. Quibusdam repudiandae enim provident, et nulla, consequatur recusandae soluta doloribus voluptates, aut perferendis. Illo impedit ratione voluptate, in nulla reiciendis illum, nobis quae veritatis animi alias!</p>
        </main>
        </div>
      </div>
    );
  }
}

export default RecipeDetails;