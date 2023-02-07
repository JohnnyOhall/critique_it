// External imports
import React from 'react';

// Components & hooks
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import About from './About';
import Footer from './Footer';

// Styling
import './Application.scss';

// Provider Imports
import RegisterProvider from '../providers/RegisterProvider';
import LoginProvider from '../providers/LoginProvider';

const App = () => { 

  return (
    <LoginProvider>
      <RegisterProvider>
        <div className="App">
          <Header />
          <Nav />
          <Main />
          <About />
          <Footer />
        </div>
      </RegisterProvider>
    </LoginProvider>
  );
};


export default App;
