import React from 'react';
import './introduction_page.css';
import flutterlogo from './images/flutterlogo.png';
const IntroductionPage = () => {
    return (
        <div className="container">
           
            <img className='image'
            src= {flutterlogo} // Replace with your image URL
            alt="Flutter logo"
            width="100px" // Additional props can be added as needed
            height="100px"
            />
          <h1>
            Fluttered
          </h1>
          <div className="text">
            Your personal Flutter guide. Solution to every question related to Flutter development.
          </div>
          <div className="search-bar">
            <select className="dropdown">
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
            <input
              type="text"
              className="input"
              placeholder = "Search..."
            />
            <button className="search-button">Search</button>
          </div>
        </div>
      );
};


export default IntroductionPage;