import { actionTypes as at } from './constants';

export const fetch = query => ({
  type: at.RECIPES_FETCH,
  query
});

export const fetchSuccess = data => ({
  type: at.RECIPES_FETCH_SUCCESS,
  data
});

export const fetchError = error => ({
  type: at.RECIPES_FETCH_ERROR,
  error
});
