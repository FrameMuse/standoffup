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
import Header from "./modules/header";
import Popup from "./modules/popup";
import MobileMenu from "./modules/mobile_menu";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(...[thunk])));

const getDeviceType = () => {
  const width = window.outerWidth;
  const mobileWidth = 560;

  document.getElementById("viewport").content = `width=${width > mobileWidth ? 1560 : mobileWidth}`;

  store.dispatch({
    type: "DEVICES/UPDATE",
    devices: {
      desktop: width > mobileWidth,
      mobile: width <= mobileWidth
    }
  });
}

getDeviceType();

window.addEventListener("resize", () => getDeviceType());


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Side />
      <standoffup-body>
        <header>
          <Header />
        </header>
        <main>
          <PagePart />
          <Chat />
        </main>
      </standoffup-body>
      <Popup />
      <MobileMenu />
    </BrowserRouter>
  </Provider>,
  document.querySelector("standoffup")
);