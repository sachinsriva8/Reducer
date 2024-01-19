import { useSelector } from "react-redux";

const ShowCounter = () => {
  const count = useSelector((state) => state.counter.count);
  console.log("count", count);
  return <p>{count}</p>;
};

export default ShowCounter;
