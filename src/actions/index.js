export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const CAR_DETAILS = 'CAR_DETAILS';

// add feature
export const addFeature = id => {
  return {
    type: ADD_FEATURE,
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