import React, { createContext, useContext, useReducer } from "react";

const StateContext = createContext();

const StateProvider = ({ reducer, initialState, Children }) => {
    return (
        <StateContext.Provider value = {useReducer(reducer, initialState)}>
            {Children}
        </StateContext.Provider>
    );  
};

const useStateValue = () => useContext(StateContext);

export { StateContext, StateProvider, useStateValue };