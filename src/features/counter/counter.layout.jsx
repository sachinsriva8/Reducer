import { useDispatch } from "react-redux";
import { Increment, Decrement, IncrementByValue } from "./counter.slice";

const CounterLayout = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(Increment());
  };
  const handleDecrement = () => {
    dispatch(Decrement());
  };
  const handleIncrementby4 = () => {
    dispatch(IncrementByValue(4));
  };
  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrementby4}>IncrementBy4</button>
    </div>
  );
};

export default CounterLayout;
