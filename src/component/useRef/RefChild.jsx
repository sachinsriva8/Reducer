import { forwardRef } from "react";

const RefChild = ({ onchange }, ref) => {
  return <input type="text" onChange={onchange} ref={ref} />;
};

const ForwardedRef = forwardRef(RefChild);

export default ForwardedRef;
