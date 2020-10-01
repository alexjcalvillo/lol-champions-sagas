import { takeEvery } from 'redux-saga/effects';
import getChampions from './champions.saga';

function* rootSaga() {
  yield takeEvery('GET_CHAMPIONS', getChampions);
}

export default rootSaga;
