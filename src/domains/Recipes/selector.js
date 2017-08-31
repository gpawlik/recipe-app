import { createSelector } from 'reselect';

const selectRecipesDomain = () => state => state.get('recipesDomain');

const selectRecipes = () => createSelector(
  selectRecipesDomain(),
  recipesState => recipesState.get('recipes').toJS()
);

const selectIsLoading = () => createSelector(
  selectRecipesDomain(),
  recipesState => recipesState.get('isLoading')
);

export {
  selectRecipes,
  selectIsLoading
};
