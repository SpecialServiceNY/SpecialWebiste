import React from 'react';
import './CardSectionContact.css';

const CardSectionContact = ({ title, content, children, backgroundColor }) => {
  return (
    <div className="card-section" style={{ backgroundColor }}>
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

export default CardSectionContact;