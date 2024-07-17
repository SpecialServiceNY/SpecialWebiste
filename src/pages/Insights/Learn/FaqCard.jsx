import React, { useState } from 'react';
import './FaqCard.css';

const FaqCard = ({ question, answer }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    const audio = new Audio('/flipcard.mp3'); // 引入音频文件
    audio.play(); // 播放音频
    setFlipped(!flipped); // 翻转卡片
  };

  return (
    <div className={`faq-card ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="faq-card-inner">
        <div className="faq-card-front">
          <h2>{question}</h2>
        </div>
        <div className="faq-card-back">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqCard;