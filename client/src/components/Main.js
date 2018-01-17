import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import RecipeDetails from './RecipeDetails';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/recipes/:id" component={RecipeDetails} />
    </Switch>
  </main>
);

export default Main;