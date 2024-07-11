import React from 'react';
import { useHighContrast } from '../../components/HighContrastContext';
import { Link } from 'react-router-dom';
import './Support.css'; // Assuming you have a CSS file for styling

const Support = () => {
  const { isHighContrast } = useHighContrast();

  const sections = [
    {
      title: 'Service',
      description: 'Use this tool to find services that match your specific needs. Select your location, age range, and service type, then click on the GO button. Your result(s) will appear below.',
      link: '/support/service',
      backgroundColor: '#FDF6C9', // Light red
    },
    {
      title: 'Encourage',
      description: 'Discover inspiring words from the blind community. These encouraging messages are sourced from online forums and real-life stories.',
      link: '/support/encourage',
      backgroundColor: '#d1ecf1', // Light blue
    },
    {
      title: 'Story',
      description: 'Explore real-life experiences of visually impaired individuals. These stories provide insights into their challenges, triumphs, and everyday life.',
      link: '/support/story',
      backgroundColor: '#d4edda', // Light green
    },
  ];

  return (
    <div className={isHighContrast ? 'high-contrast support-page' : 'support-page'}>
      {sections.map((section, index) => (
        <div key={index} className="section-card" style={{ backgroundColor: section.backgroundColor }}>
          <h2 className="section-title">{section.title}</h2>
          <p className="section-description">{section.description}</p>
          <Link to={section.link} className="section-link">Explore {section.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Support;