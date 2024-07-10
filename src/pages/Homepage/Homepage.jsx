import React, { useRef } from 'react';
import { useHighContrast } from '../../components/HighContrastContext';
import CardSectionHome from './CardSectionHome';
import Elements from './Elements';
import GIF from './GIF';
import Roadmap from './Roadmap';
import Feedback from './Feedback';
import './Homepage.css';

const Homepage = () => {
  const { isHighContrast } = useHighContrast();
  const gifRef = useRef(null);
  const elementsRef = useRef(null);
  const roadmapRef = useRef(null);
  const feedbackRef = useRef(null);

  return (
    <div className={isHighContrast ? 'high-contrast' : ''}>
      <div className="homepage">
        <CardSectionHome id="GIF" title="Introduction" content="Welcome to the 'Road to Independence'. Explore the journey and resources available for visually impaired individuals.">
          <GIF scrollToSection={(id) => gifRef.current.scrollToSection(id)} ref={gifRef} />
        </CardSectionHome>
        <CardSectionHome id="Elements" title="Core Features of the Website" ref={elementsRef}>
          <Elements />
        </CardSectionHome>
        <CardSectionHome id="Roadmap" title="Roadmap to the Independence" ref={roadmapRef}>
          <Roadmap />
        </CardSectionHome>
        <CardSectionHome id="Feedback" title="Feedback" ref={feedbackRef}>
          <Feedback />
        </CardSectionHome>
      </div>
    </div>
  );
};

export default Homepage;