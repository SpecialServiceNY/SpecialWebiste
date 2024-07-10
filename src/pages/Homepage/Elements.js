import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import './Elements.css';

const elements = [
  { id: 1, title: 'Experience', thumbnail: 'experience.jpg', details: 'Detailed description for Experience', link: '/insights/experience' },
  { id: 2, title: 'History', thumbnail: 'history.jpg', details: 'Detailed description for History', link: '/insights/history' },
  { id: 3, title: 'Story', thumbnail: 'story.jpg', details: 'Detailed description for Story', link: '/insights/story' },
  { id: 4, title: 'Forum', thumbnail: 'forum.jpg', details: 'Detailed description for Forum', link: '/support/forum' },
  { id: 5, title: 'Service', thumbnail: 'service.jpg', details: 'Detailed description for Service', link: '/support/service' },
  { id: 6, title: 'Discover', thumbnail: 'https://www.nfb.org/sites/default/files/images/nfb/publications/bm/bm12/bm1203/chris-nusbaum.gif', details: 'Detailed description for Descover', link: '/support/discover' },
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