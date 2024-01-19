import { forwardRef, useImperativeHandle, useRef, useState } from "react";

const ImperativeChild = ({ open, changeOpen }, ref) => {
  const crossRef = useRef(null);
  const okRef = useRef(null);
  const closeRef = useRef(null);
  const inputRef = useRef(null);
  const [counter, setCounter] = useState(0);

  useImperativeHandle(
    ref,
    () => {
      return {
        focusCross: () => {
          console.log("crossfocus clicked");
          crossRef.current.focus();
        },
        focusOk: () => {
          console.log("okfocus clicked");
          return okRef.current.focus();
        },
        focusCancel: () => {
          console.log("cancelfocus clicked");
          return closeRef.current.focus();
        },
        setInputValue: (value) => {
          console.log("inputRef value", inputRef.current.value);
          return (inputRef.current.value = value);
        },
        handleIncrement: () => {
          console.log("funjc");
          setCounter((counter) => counter + 1);
        },
      };
    },
    []
  );

  if (!open) return null;

  return (
    <div>
      <div>
        <button onClick={() => changeOpen(!open)} ref={crossRef}>
          Cross
        </button>
      </div>
      <div>I am modal</div>
      <div>
        <button ref={okRef}>Ok</button>
        <button ref={closeRef}>cancel</button>
      </div>
      <div>
        <input type="text" ref={inputRef} />
      </div>
      <div>{counter}</div>
    </div>
  );
};

const forwardedImperativeChild = forwardRef(ImperativeChild);
export default forwardedImperativeChild;
