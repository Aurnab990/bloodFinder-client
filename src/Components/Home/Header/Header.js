import React from 'react';
import '../Header/Header.css';
import ImageSlider from '../ImageSlider/ImageSlider';


const Header = () => {
  return (
    <div>
      <div className="header-container">
        <div className="button-container">
          <div className='header-text'>
            <h1>CREATING HOPE,</h1>
            <h1>TOGETHER.</h1>
          </div>
          <button>BE A MEMBER</button>
        </div>
        <ImageSlider/>
      </div>
    </div>
  );
};

export default Header;
