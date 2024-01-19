// import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import ReverseString from "./component/ShowReverse.jsx";
import Counter from "./component/efectCounter.jsx";
import Reducer from "./component/useReducer/useReducer.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import ShowCounter from "./features/counter/showCounter.jsx";
import CounterLayout from "./features/counter/counter.layout.jsx";
import FetchProducts from "./features/api/FakeProduct.layout.jsx";
import Styles from "./styleComponent/styles.jsx";
import RefParent from "./component/useRef/Refparent.jsx";
import ImperativeParent from "./component/useImperative/ImperativeParent.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // {/* <ReverseString /> */}
  //   <Counter />
  //   <Reducer />
  <Provider store={store}>
    <ShowCounter />
    <CounterLayout />
    <FetchProducts />
    <Styles />
    <RefParent />
    <ImperativeParent />
  </Provider>
);
