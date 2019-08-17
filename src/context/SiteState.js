import React, { useReducer } from "react";
import SiteContext from "./siteContext";
import SiteReducer from "./siteReducer";

const SiteState = props => {
  const initialState = {
    mode: "light"
  };

  const [state, dispatch] = useReducer(SiteReducer, initialState);

  // Set Loading
  const setMode = color => dispatch({ type: "SET_MODE", payload: color });

  return (
    <SiteContext.Provider
      value={{
        mode: state.mode,
        setMode
      }}
    >
      {props.children}
    </SiteContext.Provider>
  );
};

export default SiteState;
