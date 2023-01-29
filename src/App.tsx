import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
import "./App.css";

interface State {
  number: number;
}

interface Action {
  type: string;
}

const reducer = (currentState: any, action: Action) => {
  const newState = { ...currentState };
  if (currentState === undefined) {
    return { number: 1 };
  }
  if (action.type === "PLUS") {
    newState.number++;
  }
  console.log(currentState);
  return newState;
};

const store = createStore(reducer);

const App = () => {
  return (
    <div id="container">
      <h1>Root </h1>
      <div id="grid">
        <Provider store={store}>
          <Left1 />
          <Right1 />
        </Provider>
      </div>
    </div>
  );
};

const Left1 = () => {
  return (
    <div>
      <h1>Left1 :</h1>
      <Left2 />
    </div>
  );
};

const Left2 = () => {
  const number = useSelector((state: State) => state.number);

  return (
    <div>
      <h1>Left2 : {number}</h1>
      <Left3 />
    </div>
  );
};

const Left3 = () => {
  const number = useSelector((state: State) => state.number);

  return (
    <div>
      <h1>Left3 : {number}</h1>
    </div>
  );
};

const Right1 = () => {
  return (
    <div>
      <h1>Right1 : </h1>
      <Right2 />
    </div>
  );
};

const Right2 = () => {
  return (
    <div>
      <h1>Right2 : </h1>
      <Right3 />
    </div>
  );
};

const Right3 = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Right3 : </h1>
      <button
        onClick={() => {
          dispatch({ type: "PLUS" });
        }}
      >
        +
      </button>
    </div>
  );
};
export default App;
