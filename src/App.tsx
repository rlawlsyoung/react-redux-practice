import React, { useState } from "react";
import "./App.css";

interface LeftType {
  number: number;
}

interface RightType {
  number: number;
  onIncrease: () => void;
}

const App = () => {
  const [number, setNumber] = useState(1);

  return (
    <div id="container">
      <h1>Root : {number}</h1>
      <div id="grid">
        <Left1 number={number} />
        <Right1 number={number} onIncrease={() => setNumber(number + 1)} />
      </div>
    </div>
  );
};

const Left1: React.FC<LeftType> = ({ number }) => {
  return (
    <div>
      <h1>Left1 : {number}</h1>
      <Left2 number={number} />
    </div>
  );
};

const Left2: React.FC<LeftType> = ({ number }) => {
  return (
    <div>
      <h1>Left2 : {number}</h1>
      <Left3 number={number} />
    </div>
  );
};

const Left3: React.FC<LeftType> = ({ number }) => {
  return (
    <div>
      <h1>Left3 : {number}</h1>
    </div>
  );
};

const Right1: React.FC<RightType> = ({ number, onIncrease }) => {
  return (
    <div>
      <h1>Right1 : {number}</h1>
      <Right2 number={number} onIncrease={onIncrease} />
    </div>
  );
};

const Right2: React.FC<RightType> = ({ number, onIncrease }) => {
  return (
    <div>
      <h1>Right2 : {number}</h1>
      <Right3 number={number} onIncrease={onIncrease} />
    </div>
  );
};

const Right3: React.FC<RightType> = ({ number, onIncrease }) => {
  return (
    <div>
      <h1>Right3 : {number}</h1>
      <button
        onClick={() => {
          onIncrease();
        }}
      >
        +
      </button>
    </div>
  );
};
export default App;
