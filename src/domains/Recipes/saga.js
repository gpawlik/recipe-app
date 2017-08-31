import { call, put, fork, takeLatest } from 'redux-saga/effects';

import { fetchRecipes } from './service';
import { fetchSuccess, fetchError } from './actions';
import { actionTypes as at} from './constants';

export function* fetchAllRecipes({ query }) {
  try {
    const result = yield call(fetchRecipes, query);

    yield put(fetchSuccess(result));
  } catch (err) {
    yield put(fetchError(err));
  }
}

export function* recipesWatcher() {
  yield fork(takeLatest, at.RECIPES_FETCH, fetchAllRecipes);
}
