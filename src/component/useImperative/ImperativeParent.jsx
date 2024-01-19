import { useRef, useState } from "react";
import ImperativeChild from "./mperativeChild";

const ImperativeParent = () => {
  const [open, setOpen] = useState(false);
  const modelRef = useRef(null);

  return (
    <div>
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        openModal
      </button>
      <button onClick={() => modelRef.current.focusCross()}>focus cross</button>
      <button onClick={() => modelRef.current.focusOk()}>focus ok</button>
      <button onClick={() => modelRef.current.focusCancel()}>
        focus cancel
      </button>
      <button onClick={() => modelRef.current.setInputValue("I am changed")}>
        click to change value of input
      </button>
      <button onClick={() => modelRef.current.handleIncrement()}>
        Increment
      </button>
      <ImperativeChild ref={modelRef} open={open} changeOpen={setOpen} />
    </div>
  );
};
export default ImperativeParent;
