import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import NewApp from "./NewApp";
import reportWebVitals from "./reportWebVitals";
// import { createStore } from "redux";
// import Function from "./reducers/function";
// import { composeWithDevTools } from "redux-devtools-extension";
import store from './ReduxApp/store'
import {Provider} from 'react-redux'

// const store1 = createStore(Function, composeWithDevTools());
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
      <NewApp />
      {/* <App /> */}
      </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
