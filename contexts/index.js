// SOURCE : https://kaloraat.com/articles/nextjs-react-context-tutorial-how-to-use-context-api-with-nextjs

import { useState, useEffect, useReducer, createContext } from "react";
import { ui } from "./reducers/ui";
import { devApi } from "./reducers/devApi";


// initial state
const initialState = {
  navMenuOpen: false,
  showLoader: false,
  showMainCanvas: true,
  articles: [],
  currentArticle: null,
};

// create context
const Context = createContext({});

// combine reducer function ( had to deviate from article)
const combineReducers = (reducers) => (state, action) => {
  for (var i = 0; i < reducers.length; i++) {
    state = reducers[i](state, action);
  }
  return state
};


// context provider
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(combineReducers([ui, devApi]), initialState);
  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };