import React, {useState, createContext} from "react";

export const LoginContext = createContext();

const LoginProvider = props => {
  const [ loggedIn, setLoggedIn ] = useState( false );

  const value = { loggedIn, setLoggedIn };

  return (
    <LoginContext.Provider value={value}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;