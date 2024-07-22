import React from 'react';
import { useHighContrast } from '../../components/HighContrastContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram, faDraftingCompass, faLink } from '@fortawesome/free-solid-svg-icons';
import './About.css';

const About = () => {
  const { isHighContrast } = useHighContrast();
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  const openAboutMe = () => {
    openInNewTab('https://xanderxuan.wordpress.com');
  };

  const openTheProject = () => {
    openInNewTab('https://medium.com/@qc_96385/road-to-the-independence-a-summary-81a7fa21e27b');
  };

  return (
    <div className={isHighContrast ? 'high-contrast' : ''}>
    <div className="about-overview">
      <div className="section about-me">
      <h2 className="section-title clickable" onClick={openAboutMe}>
        About Me <span className="click-for-details">(click for details)</span>
      </h2>
      <div className="up">
          <img className="profile-photo" src={`${process.env.PUBLIC_URL}/profile.jpg`} alt="Profile" />
          <p className="name">Qingxuan Chen</p>
        </div>
      <div className="section-content">
        
        <div className="down">
          <p className="description">
          I am a graduate student at Fordham University, set to graduate in August 2024. I have almost four years of professional experience in a news agency in China. Nearing graduation, I am eager to embark on a new career journey.
          </p>
          <p>
          Throughout my career, I have focused on video production, project planning, and news editing. My education has broadened my expertise to include communication planning, marketing strategy, and public relations for both for-profit and nonprofit organizations.
          </p>
        </div>
      </div>
    </div>

      <div className="section about-project">
        <h2 className="section-title clickable" onClick={openTheProject}>
          About the Project <span className="click-for-details" style={{ color: 'blue' }}> (click for details)</span>
        </h2>
        <div className="section-content">
          <div className="item">
            <FontAwesomeIcon icon={faProjectDiagram} size="3x" />
            <p>Introduction</p>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faDraftingCompass} size="3x" />
            <p>Blueprint</p>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faLink} size="3x" />
            <p>Reference</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;