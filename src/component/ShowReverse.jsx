import { useState } from "react";
import { getReverseString } from "../utils/reverse";

const ReverseString = () => {
  //   const [string, setString] = useState(stringArray);
  const [input, setInput] = useState("");
  const [reverse, setReverse] = useState("");

  const handleClick = () => {
    const result = getReverseString(input);
    setReverse(result);
  };

  return (
    <div>
      <div>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
      </div>
      <div>
        <button onClick={handleClick}>Click to reverse string</button>
      </div>
      <div>
        <p>{reverse}</p>
      </div>
    </div>
  );
};

export default ReverseString;
