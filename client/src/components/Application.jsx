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
import CritiqueProvider from '../providers/CritiqueProvider';
import ExploreProvider from '../providers/ExploreProvider';

const App = () => { 

  return (
    <LoginProvider>
      <RegisterProvider>
        <ExploreProvider>
          <CritiqueProvider>
            <div className="App">
              <Header />
              <Nav />
              <Main />
              <About />
              <Footer />
            </div>
          </CritiqueProvider>
        </ExploreProvider> 
      </RegisterProvider>
    </LoginProvider> 
  );
};


export default App;
