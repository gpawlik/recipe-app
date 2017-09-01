import { fromJS } from 'immutable';

import * as actions from 'domains/Recipes/actions';
import recipesReducer from 'domains/Recipes/reducer';

describe('ABTest reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = fromJS({
      recipes: [],
      isLoading: false
    });
  });

  it('should return the initial state', () => {
    const expectedResult = initialState;

    expect(recipesReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should process type RECIPES_FETCH', () => {
    const expectedResult = initialState
      .set('isLoading', true);

    const action = actions.fetch();

    expect(recipesReducer(initialState, action)).toEqual(expectedResult);
  });

  it('should process type RECIPES_FETCH_SUCCESS', () => {
    const data = [{
      title: 'foo'
    }];
    const expectedResult = initialState
      .set('recipes', fromJS(data))
      .set('isLoading', false);

    const action = actions.fetchSuccess(data);

    expect(recipesReducer(initialState, action)).toEqual(expectedResult);
  });

  it('should process type RECIPES_FETCH_ERROR', () => {
    const error = 'error';
    const expectedResult = initialState
      .set('isLoading', false);

    const action = actions.fetchError(error);

    expect(recipesReducer(initialState, action)).toEqual(expectedResult);
  });
});
