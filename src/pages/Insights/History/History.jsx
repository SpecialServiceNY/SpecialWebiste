import React from 'react';
import { useHighContrast } from '../../../components/HighContrastContext';
import './History.css';

const TimelineEmbed = () => {
  return (
    <div className="timeline-container">
      <iframe
        src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=17CDcERB-qovfCOBmA9h0fVOdabRkXHe6Hhf2wLzX78o&font=Default&lang=en&initial_zoom=2&height=650'
        width='100%'
        height='650'
        webkitallowfullscreen='true'
        mozallowfullscreen='true'
        allowfullscreen='true'
        frameBorder='0'
        title="History Timeline"
      ></iframe>
    </div>
  );
};

const History = () => {
  const { isHighContrast } = useHighContrast();
  return (
    <div className={isHighContrast ? 'high-contrast' : ''}>
    <div>
      <div className="timeline-blurb">
        <h2>The History of Support for the Visually Impaired in America: From Marginalization to Integration</h2>
        <p>
          Discover the transformative journey of the visually impaired in America. From early marginalization to today's comprehensive support and technological advancements, explore how society has progressively recognized and integrated the visually impaired community. Dive into our timeline to see the key milestones and understand the evolution of equal opportunities and support.
        </p>
      </div>
      <TimelineEmbed />
    </div>
    </div>
  );
};

export default History;