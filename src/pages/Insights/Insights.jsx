import React from 'react';
import { useHighContrast } from '../../components/HighContrastContext';
import { Link } from 'react-router-dom';
import './Insights.css'; // Assuming you have a CSS file for styling

const Insights = () => {
  const { isHighContrast } = useHighContrast();

  const sections = [
    {
      title: 'Learn',
      description: 'Welcome to our "Learn" section! Explore a wealth of knowledge about visually impaired individuals, diving into their experiences, challenges, and achievements.',
      link: '/insights/learn',
      backgroundColor: '#FDF6C9', // Light red
    },
    {
      title: 'History',
      description: 'Explore the transformative journey of the visually impaired in America, from early marginalization to today\'s support and technological advancements, uncovering key milestones in societal evolution.',
      link: '/insights/history',
      backgroundColor: '#d1ecf1', // Light blue
    }
  ];

  return (
    <div className={isHighContrast ? 'high-contrast insights-page' : 'insights-page'}>
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

export default Insights;