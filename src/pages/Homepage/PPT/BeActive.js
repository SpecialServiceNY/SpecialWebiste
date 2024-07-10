import React from 'react';
import './Steps.css'; 

const backgroundImageUrl = 'https://right-hear.com/wp-content/uploads/2018/02/blind-runner.jpeg';

const BeActive = () => {
  return (
    <div className="receive-diagnosis-container">
      <div className="card">
        <div className="background-image" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
          </div>
        <div className="text-container">
          <h1 className="title">Be Active</h1>
          <div className="text">
            <p>
              After receiving support and connecting with resources, the next crucial step is to actively engage in pursuing your goals. This journey requires more than just accessing services; it demands your active participation and determination.
            </p>
            <p>
              Imagine all the pathways and possibilities that await you. These resources can open doors, but it's your commitment and effort that will propel you forward. Every step you take, no matter how small, is a testament to your strength and resilience.
            </p>
            <p>
              Remember, this journey is yours to shape. Embrace the opportunities before you and take pride in your achievements. By being active in this process, you not only fulfill your goals but also inspire others with your determination and spirit.
            </p>
          </div>
          <div className="audio">
            <p className="audio-caption">Listen to Taisha's words:</p>
            <audio controls>
              <source src="/Roadmap - actively participate.MP3" type="audio/mp3" />
            </audio>
            </div>
        </div>
      </div>
    </div>
  );
}

export default BeActive;