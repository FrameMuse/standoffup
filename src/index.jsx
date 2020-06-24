/* React */

import React from "react";
import ReactDOM from "react-dom";

/* Redux */

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
// import { composeWithDevTools } from "remote-redux-devtools";

/* Route */

import { BrowserRouter } from "react-router-dom";

import Side from "./side";
import Chat from "./chat";
import PagePart from "./page-part.jsx";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(...[thunk])));


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Side />
    </BrowserRouter>
  </Provider>,
  document.querySelector("standoffup-sidebar")
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PagePart />
    </BrowserRouter>
  </Provider>,
  document.querySelector("page-part")
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Chat />
    </BrowserRouter>
  </Provider>,
  document.querySelector("standoffup-chat")
);