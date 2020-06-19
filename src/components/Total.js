import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { car: state.car, additionalPrice: state.additionalPrice }
}

let Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

Total = connect(mapStateToProps)(Total);

export default Total;
