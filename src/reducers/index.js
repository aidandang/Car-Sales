import { combineReducers } from 'redux';
import additionalPrice from './additionalPrice'
import car from './car';
import additionalFeatures from './additionalFeatures';

const rootReducer = combineReducers({
  additionalPrice,
  car,
  additionalFeatures
});

export default rootReducer;