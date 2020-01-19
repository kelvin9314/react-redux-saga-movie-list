import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import devToolsEnhancer from "remote-redux-devtools";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./redux/reducers/index";
import rootSaga from "./redux/saga/moviesSaga";
import "./index.css";

import Counter from "./Counter";
import Movies from "./view/movies";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    devToolsEnhancer()
  )
);
sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      {/* <Counter /> */}
      <Movies />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
