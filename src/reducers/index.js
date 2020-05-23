import {
  ADD_FEATURE,
  REMOVE_FEATURE
} from '../actions';

const features = (state = [], action) => {
  switch (action.type) {
    case ADD_FEATURE:
      return [{
        id: action.id
      }]
    case REMOVE_FEATURE:
      return state.filter(feature => feature.id !== action.id)
    default:
      return state
  }
}