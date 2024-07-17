import React, { useState, useEffect } from 'react';
import './FaqCard.css';

const FaqCard = ({ question, answer, onClick }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    const audio = new Audio('/flipcard.mp3'); // 引入音频文件
    audio.play(); // 播放音频
    setFlipped(!flipped); // 翻转卡片
  };

  // 添加 useEffect 监听 flipped 变化
  useEffect(() => {
    // 如果卡片已经翻转，并且有传入的 onClick 函数，则调用 onClick 函数
    if (flipped && typeof onClick === 'function') {
      onClick();
    }
  }, [flipped, onClick]);

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