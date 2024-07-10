import React from 'react';
import './Header.css';

const Header = () => {

  const increaseFontSize = () => {
    changeFontSizeByAmount(3);
  };

  const decreaseFontSize = () => {
    changeFontSizeByAmount(-3);
  };

  const changeFontSizeByAmount = (amount) => {
    var elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
    elements.forEach(function (element) {
      var fontSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
      var currentFontSize = parseInt(fontSize);
      element.style.fontSize = (currentFontSize + amount) + "px";
    });
  };

  const headerStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/road.gif)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };

  return (
    <header style={headerStyle} className="header">
      <div className="title-container">
        <h1 className="title">
          Road to Independence
          <span className="braille">
            ⠠⠗⠕⠁⠙ ⠞⠕ ⠊⠝⠙⠑⠏⠑⠝⠙⠑⠝⠉⠑
          </span>
        </h1>
        <p className="tagline">
          A journey beyond what you SEE
          <span className="braille">
            ⠠⠁ ⠚⠕⠥⠗⠝⠑⠽ ⠃⠑⠽⠕⠝⠙ ⠺⠓⠁⠞ ⠽⠕⠥ ⠎⠑⠑
          </span>
        </p>
      </div>
      <div className="controls-container">
        <button onClick={increaseFontSize} className="font-control" id="increaseFontButton">A+</button>
        <button onClick={decreaseFontSize} className="font-control" id="decreaseFontButton">A-</button>
      </div>
    </header>
  );
};

export default Header;