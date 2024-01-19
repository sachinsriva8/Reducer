import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "Add": {
      return action.payload + state;
    }
    case "sub": {
      return action.payload - state;
    }
    case "mul": {
      return action.payload * state;
    }
    case "div": {
      return action.payload / state;
    }
    default:
      break;
  }
};

const Reducer = () => {
  const [value, dispatch] = useReducer(reducer, 3);

  return (
    <div>
      <button onClick={() => dispatch({ type: "Add", payload: 2 })}>Add</button>
      <button>Sub</button>
      <button>Mul</button>
      <button>Div</button>
      <p>{value}</p>
    </div>
  );
};

export default Reducer;
