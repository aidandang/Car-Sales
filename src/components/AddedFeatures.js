import React from 'react';
import { connect } from 'react-redux';
import AddedFeature from './AddedFeature';

const mapStateToProps = state => {
  return { car: state.car, additionalFeatures: state.additionalFeatures }
}

let AddedFeatures = props => {
  console.log(props.car.features)
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length > 0 ? (
        <ol type="1">
          {props.car.features.map(item => {
            return <AddedFeature key={item.id} feature={item} />
          })}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

AddedFeatures = connect(mapStateToProps)(AddedFeatures);

export default AddedFeatures;
