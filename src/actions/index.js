export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

// add feature
export const addFeature = item => {
  return {
    type: ADD_FEATURE,
    item
  }
}

// remove feature
export const removeFeature = id => {
  return {
    type: REMOVE_FEATURE,
    id
  }
}