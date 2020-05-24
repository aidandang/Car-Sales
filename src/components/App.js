import React from 'react';
import Header from './Header'
import AdditionalFeatures from './AdditionalFeatures';
import Total from './Total';
import AddedFeatures from './AddedFeatures';

const App = () => {
  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures />
        <Total />
      </div>
    </div>
  );
};

export default App;
