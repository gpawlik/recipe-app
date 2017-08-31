import { recipesWatcher } from 'domains/Recipes/saga';

export default function* rootSaga() {
  yield [
    recipesWatcher()
  ];
}
