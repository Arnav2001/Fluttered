import React from 'react';
import TwoColorSection from './homePage';
import  Footer from './footer';

import IntroductionPage from './introduction_page.js';
const App = () => {
  return (
    <div> 
      <IntroductionPage/>
      <TwoColorSection/>
      <Footer/>
    </div>
  );
};

export default App;
