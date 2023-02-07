import React, { useState, createContext } from "react";

export const RegisterContext = createContext();

const RegisterProvider = props => {
  const [ register, setRegister ] = useState( false );

  const value = { register, setRegister };

  return (
    <RegisterContext.Provider value={ value }>
      { props.children }
    </RegisterContext.Provider>
  );
};

export default RegisterProvider;