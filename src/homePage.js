import React from 'react';
import flutterlogo from './images/flutterlogo.png';
import './gridview.js';
import AnimatedGrid from './gridview.js';
import './homePage.css';
const TwoColorSection = () => {
  return (
    <div className='div'>
      <h1 className='h1'>
        Important Topics
      </h1>
    <section className="two-color-section">
      <div className="content">
      <img
        src= {flutterlogo} // Replace with your image URL
        alt="Flutter logo"
        width="35%" // Additional props can be added as needed
        height="35%"
      />
      <AnimatedGrid/>
      </div>
    </section>
    </div>
  );
};

export default TwoColorSection;
