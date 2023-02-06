// External imports
import React, { createContext, useState } from 'react';

// Components & hooks
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import About from './About';
import Footer from './Footer';

// Styling
import './Application.scss';

// Global Variables
export const GlobalContext = createContext();


const App = () => { 
  const [ loggedIn, setLoggedIn ] = useState( false );
  const [ register, setRegister ] = useState( false );

  return (
    <GlobalContext.Provider 
      value={{ 
        loggedIn, 
        setLoggedIn, 
        register, 
        setRegister 
      }}
    >
      <div className="App">
        <Header />
        <Nav />
        <Main />
        <About />
        <Footer />
      </div>
    </GlobalContext.Provider>
  );
};


export default App;
