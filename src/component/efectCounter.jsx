import { useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(6);

  useEffect(() => {
    setCounter(counter + 1);
  }, []);

  return <div>{counter}</div>;
};

export default Counter;
