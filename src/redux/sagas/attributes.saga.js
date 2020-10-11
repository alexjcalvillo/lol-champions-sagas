import { put } from 'redux-saga/effects';
import axios from 'axios';

function* getAttributes(action) {
  try {
    const response = yield axios.get('/api/champions/attr');
    yield put({
      type: 'SET_ATTR',
      payload: response.data,
    });
  } catch (err) {
    console.warn(err);
  }
}

export default getAttributes;
