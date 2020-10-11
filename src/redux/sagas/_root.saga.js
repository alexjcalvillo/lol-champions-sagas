import { all } from 'redux-saga/effects';
import championsSaga from './champions.saga';
import attributesSaga from './attributes.saga';

export default function* rootSaga() {
  yield all([championsSaga(), attributesSaga()]);
}
