import { fromJS } from 'immutable';

import { actionTypes as at } from './constants';

const initialState = fromJS({
  recipes: [],
  isLoading: false
});

export default (state = initialState, action) => {
  switch (action.type) {
    case at.RECIPES_FETCH:
      return state.set('isLoading', true);
    case at.RECIPES_FETCH_SUCCESS:
      return state
        .set('recipes', fromJS(action.data))
        .set('isLoading', false);
    case at.RECIPES_FETCH_ERROR:
      return state.set('isLoading', false);
    default:
      return state;
  }
};
