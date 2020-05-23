export const ADD_FEATURES = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

// add feature
export const addFeature = id => {
  return {
    type: ADD_FEATURES,
    id
  }
}

// remove feature
export const removeFeature = id => {
  return {
    type: REMOVE_FEATURE,
    id
  }
}