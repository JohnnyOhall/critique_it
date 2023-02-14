// External imports
import React, { useEffect, useState } from 'react';

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

  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 340) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    });
  }, []);

  const bottomToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <LoginProvider>
      <RegisterProvider>
        <ExploreProvider>
          <CritiqueProvider>
            <div className="App">
              { scrollTop && (
                
                <img
                  onClick={bottomToTop} 
                  className="backToTop" 
                  src="https://ps.w.org/wpfront-scroll-top/assets/icon-256x256.png?rev=1534312"
                  />
            
              )}
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
