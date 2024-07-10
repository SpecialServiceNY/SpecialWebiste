import React, { useState, useEffect } from 'react';
import './BackToTopButton.css';

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <button
      id="backToTopButton"
      style={{ display: isVisible ? 'block' : 'none' }}
      onClick={scrollToTop}
    >
      Back to Top
    </button>
  );
}

export default BackToTopButton;