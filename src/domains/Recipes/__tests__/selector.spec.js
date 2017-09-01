import { fromJS } from 'immutable';

import {
  selectRecipes,
  selectIsLoading
} from 'domains/Recipes/selector';

describe('Recipes selector', () => {
  describe('selectRecipes', () => {
    const selector = selectRecipes();

    it('should return correctly recipes from recipesStore', () => {
      const store = {
        recipes: [{
          title: 'foo'
        }]
      };
      const state = fromJS({
        recipesDomain: fromJS(store)
      });

      expect(selector(state)).toEqual(store.recipes);
    });
  });

  describe('selectIsLoading', () => {
    const selector = selectIsLoading();

    it('should return correctly isLoading from recipesStore', () => {
      const store = {
        isLoading: false
      };
      const state = fromJS({
        recipesDomain: fromJS(store)
      });

      expect(selector(state)).toEqual(store.isLoading);
    });
  });
});
