import React from 'react';
import ReactDOM from 'react-dom';
import RecipeCard from './components/RecipeCard';
import './style.css'

ReactDOM.render(
  <RecipeCard url='http://localhost:5000/api/comments' />,
  document.getElementById('root')
);