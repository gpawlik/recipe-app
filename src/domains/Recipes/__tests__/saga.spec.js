import { put } from 'redux-saga/effects';

import { fetchSuccess, fetchError } from '../actions';
import { fetchAllRecipes } from '../saga';

const query = 'foo';

describe('fetchRecipes Saga', () => {
  let fetchRecipesGenerator;

  beforeEach(() => {
    fetchRecipesGenerator = fetchAllRecipes({ query });

    const callDescriptor = fetchRecipesGenerator.next(query).value;

    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the fetchSuccess action if it requests the data successfully', () => {
    const response = [{
      title: 'foo'
    }];
    const putDescriptor = fetchRecipesGenerator.next(response).value;

    expect(putDescriptor).toEqual(put(fetchSuccess(response, query)));
  });

  it('should call the fetchError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = fetchRecipesGenerator.throw(response).value;

    expect(putDescriptor).toEqual(put(fetchError(response)));
  });
});
