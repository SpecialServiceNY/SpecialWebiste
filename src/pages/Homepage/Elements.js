import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import './Elements.css';

const elements = [
  { id: 1, title: 'Experience', thumbnail: 'experience.jpg', details: 'An interactive game to learn about assistive technologies for visually impaired.', link: '/insights/experience' },
  { id: 2, title: 'History', thumbnail: 'history.jpg', details: 'From early marginalization to today’s comprehensive support and technological advancements, explore how society has progressively recognized and integrated the visually impaired community.', link: '/insights/history' },
  { id: 3, title: 'Story', thumbnail: 'story.jpg', details: 'Detailed description for Story', link: '/insights/story' },
  { id: 4, title: 'Encourage', thumbnail: 'forum.jpg', details: 'The Encourage Page showcases a collection of uplifting and motivational messages. This page aims to inspire everyone, fostering a sense of independence and encouraging the pursuit of greater goals.', link: '/support/encourage' },
  { id: 5, title: 'Service', thumbnail: 'service.jpg', details: 'This program search tool is designed to help users find services that meet their specific needs. Users can filter results to discover relevant services and resources tailored to their preferences.', link: '/support/service' },
  { id: 6, title: 'Learn', thumbnail: 'https://www.nfb.org/sites/default/files/images/nfb/publications/bm/bm12/bm1203/chris-nusbaum.gif', details: 'In Learn page, you will explore a wealth of knowledge about visually impaired individuals. Delve into various aspects that shed light on their experiences, challenges, and achievements.', link: '/insights/learn' },
];

const Elements = () => {
  const [activeElements, setActiveElements] = useState({});

  const handleElementClick = (elementId) => {
    setActiveElements((prevActiveElements) => ({
      ...prevActiveElements,
      [elementId]: !prevActiveElements[elementId]
    }));
  };

  return (
    <div className="elements">
      {elements.map((element) => (
        <div key={element.id} className="element-card">
          {activeElements[element.id] ? (
            <div className="element-details">
              <div
                className="background-blur"
                style={{ backgroundImage: `url(${element.thumbnail})` }}
              ></div>
              <div className="details-content">
                <p>{element.details}</p>
                <Link to={element.link} className="link-button">
                  <FontAwesomeIcon icon={faLink} size="lg" />
                  <span>Visit Page</span>
                </Link>
                <button onClick={() => handleElementClick(element.id)}>Show Thumbnail</button>
              </div>
            </div>
          ) : (
            <>
              <img src={element.thumbnail} alt={element.title} className="element-thumbnail" />
              <h3>{element.title}</h3>
              <button onClick={() => handleElementClick(element.id)}>Click for details</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Elements;