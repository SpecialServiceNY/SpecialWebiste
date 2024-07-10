import React, { useRef } from 'react';
import './GIF.css';

const GIF = React.forwardRef((props, ref) => {
  const gifRef = useRef(null);

  return (
    <div className="content-area" ref={gifRef}>
      <div className="container">
        <img className="gif" src="/Cane walking.gif" alt="Blind person walking with a cane" />
        <div className="top-right-container">
          <div className="top-right-text">
            <p>Journey of visually impaired persons</p>
            <hr className="separator" />
            <p className="smaller-text">A journey that you might never SEE</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default GIF;