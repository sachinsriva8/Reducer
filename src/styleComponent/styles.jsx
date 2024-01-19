import { useState } from "react";
import styled from "styled-components";

const Wrraper = styled.div`
  border: 1px solid red;
  backgroundcolor: green;
  color: ${(props) => props.inputColor || "red"};
`;

const Styles = () => {
  const [color, setColor] = useState("red");

  const handleClick = () => {
    setColor("blue");
  };
  return (
    <>
      <Wrraper inputColor={color}>Hello</Wrraper>
      <Wrraper>
        <button onClick={handleClick}>Click to change color</button>
      </Wrraper>
    </>
  );
};

export default Styles;
