import { useDispatch, useSelector } from "react-redux";
import { ApiThunk } from "./api.slice";

const FetchProducts = () => {
  const ProductList = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(ApiThunk());
  };

  return (
    <div>
      <div>
        <button onClick={handleClick}>Clicl to fetch api</button>
      </div>
      <div>
        {ProductList?.map((item) => {
          return <p key={item.id}>{item.id}</p>;
        })}
      </div>
    </div>
  );
};

export default FetchProducts;
