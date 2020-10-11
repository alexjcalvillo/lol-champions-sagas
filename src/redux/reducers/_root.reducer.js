import { combineReducers } from 'redux';
import championsReducer from './champions.reducer';
import attributesReducer from './attributes.reducer';

const rootReducer = combineReducers({
  championsReducer,
  attributesReducer,
});

export default rootReducer;
