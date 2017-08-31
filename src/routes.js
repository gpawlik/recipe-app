import React from 'react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';

import DefaultLayout from 'layouts/DefaultLayout';
import RecipeList from 'domains/Recipes/RecipeList';

export default (
  <BrowserRouter>
    <div>
      <Switch>
        <Redirect exact from="/" to="/recipes" />
        <DefaultLayout path="/recipes" component={RecipeList} />
      </Switch>
    </div>
  </BrowserRouter>
);
