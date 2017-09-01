/*eslint-env jest, expect */
import { actionTypes as at } from 'domains/Recipes/constants';
import * as actions from 'domains/Recipes/actions';

describe('Recipes actions', () => {
  describe('fetch', () => {
    it('should return type and query', () => {
      const query = 'foo';

      expect(actions.fetch(query)).toEqual({
        type: at.RECIPES_FETCH,
        query: 'foo'
      });
    });
  });

  describe('fetchSuccess', () => {
    it('should return type and recipe results', () => {
      const results = [{
        title: 'foo'
      }];

      expect(actions.fetchSuccess(results)).toEqual({
        type: at.RECIPES_FETCH_SUCCESS,
        data: [{
          title: 'foo'
        }]
      });
    });
  });

  describe('fetchError', () => {
    it('should return type and error', () => {
      const error = 'error';

      expect(actions.fetchError(error)).toEqual({
        type: at.RECIPES_FETCH_ERROR,
        error
      });
    });
  });
});
