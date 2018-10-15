import React from "react";
import { render } from "react-dom";
import "./styles.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import wfStates from "./reducers/index";
import App from "./components/App";

const store = createStore(wfStates);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
