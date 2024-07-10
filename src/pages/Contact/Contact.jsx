import React from 'react';
import { Link } from 'react-router-dom';
import CardSectionContact from './CardSectionContact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBuilding, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const Contact = () => {
  const sections = [
    {
      title: 'Community',
      description: 'Local community organizations for support.',
      link: '/contact/community',
      icon: faUsers,
      backgroundColor: '#FDF6C9', // Light red
    },
    {
      title: 'Organization',
      description: 'Learn more about the organizations and their mission.',
      link: '/contact/organization',
      icon: faBuilding,
      backgroundColor: '#d1ecf1', // Light blue
    },
    {
      title: 'Volunteer',
      description: 'Find out how you can volunteer and make a difference.',
      link: '/contact/volunteer',
      icon: faHandsHelping,
      backgroundColor: '#d4edda', // Light green
    },
  ];

  return (
    <div className="contact-page">
      {sections.map((section, index) => (
        <CardSectionContact key={index} title={section.title} content={section.description} backgroundColor={section.backgroundColor}>
          <FontAwesomeIcon icon={section.icon} className="card-icon" />
          <Link to={section.link} className="contact-link">Learn More</Link>
        </CardSectionContact>
      ))}
    </div>
  );
};

export default Contact;