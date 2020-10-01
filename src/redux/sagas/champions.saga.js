import { put } from 'redux-saga/effects';
import axios from 'axios';

function* getChampions(action) {
  try {
    const response = yield axios.get('/api/champions');
    yield put({
      type: 'SET_CHAMPIONS',
      payload: response.data,
    });
  } catch (err) {
    console.warn(err);
  }
}

export default getChampions;
