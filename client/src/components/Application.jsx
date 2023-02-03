// External imports
import React from 'react';

// Components
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import About from './About';
import Footer from './Footer';

// Styling
import './Application.scss';


const App = () => {


  return (
    <div className="App">
      <Header />
      <Nav />
      <Main />
      <About />
      <Footer />
    </div>
  );
};


export default App;
