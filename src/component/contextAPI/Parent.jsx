import { useState } from "react";

const Parent = () => {
  const [counter, setCounter] = useState();
  return (
    <div>
      <p>{counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default Parent;
