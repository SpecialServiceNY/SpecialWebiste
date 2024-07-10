import React from 'react';
import './CardSectionHome.css';

const CardSectionHome = ({ title, content, children }) => {
  return (
    <div className="card-section">
      {title && <h2>{title}</h2>}
      <div className="card-content">
        {content}
      </div>
      <div className="card-children">
        {children}
      </div>
    </div>
  );
};

export default CardSectionHome;