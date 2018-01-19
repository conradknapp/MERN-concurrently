import React from 'react';
import '../style.css';
import Showcase from './Showcase';
import RecipeCard from './RecipeCard';

const Landing = () => (
  <div>
    <Showcase />
    <RecipeCard url='http://localhost:5000/api/recipes' />
  </div>
)

export default Landing;