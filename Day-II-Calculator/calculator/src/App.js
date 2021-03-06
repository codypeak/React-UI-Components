import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';


const App = () => {
  return (
    <div className="container">
      <div className="display">
        <CalculatorDisplay />
      </div>
      <div className="buttons">
        <ActionButton />
        <NumberButton />
      </div>
    </div>
  );
};

export default App;
