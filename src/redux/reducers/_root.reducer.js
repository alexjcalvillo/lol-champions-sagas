import { combineReducers } from 'redux';
import championsReducer from './champions.reducer';

const rootReducer = combineReducers({
  championsReducer,
});

export default rootReducer;
