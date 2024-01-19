import { useEffect, useRef, useState } from "react";
import InputTag from "./RefChild";

const RefParent = () => {
  const [input, setInput] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current = input;
    console.log("val", inputRef.current.value);
  }, [input]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <div>
        <InputTag
          //   type="text"
          ref={inputRef}
          onchange={handleChange}
        />
      </div>
      <div>
        My nane is {input} and previously it used to be {inputRef.current}
      </div>
    </div>
  );
};

export default RefParent;
