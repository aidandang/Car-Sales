import React from 'react';
import { addFeature } from '../actions';

const AdditionalFeature = ({ feature, dispatch }) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        onClick={() => dispatch(addFeature(feature))} 
        className="button"
      >
        Add
      </button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default AdditionalFeature;
