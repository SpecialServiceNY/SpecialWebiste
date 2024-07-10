import React, { useState } from 'react';
import './FaqCard.css';

const FaqCard = ({ question, answer }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`faq-card ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="faq-card-inner">
        <div className="faq-card-front">
          <h3>{question}</h3>
        </div>
        <div className="faq-card-back">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqCard;