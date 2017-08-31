import { combineReducers } from 'redux-immutable';

import recipesReducer from 'domains/Recipes/reducer';

export default combineReducers({
  recipesDomain: recipesReducer
});
