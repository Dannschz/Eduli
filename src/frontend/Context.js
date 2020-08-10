import React, { createContext, useReducer, useContext } from 'react';
import reducer from './reducers';

export const Context = createContext();

export const Provider = ({ children, initialState = {} }) => {
  return (
    <Context.Provider value={useReducer(reducer, initialState)}>
      {children}
    </Context.Provider>
  );
};

export const useStateValue = () => useContext(Context);
