import React from 'react';
import { useHighContrast } from '../../../components/HighContrastContext';
import { Link } from 'react-router-dom'; 
import './Learn.css'; 

const Learn = () => {
  const { isHighContrast } = useHighContrast();
  return (
    <div className={isHighContrast ? 'high-contrast' : ''}>
    <div className="discover-page">
      <div className="page-header">
        <h1>Learn</h1>
        <p>Welcome to our "Learn" section! Here, you'll explore a wealth of knowledge about visually impaired individuals. Delve into various aspects that shed light on their experiences, challenges, and achievements.</p>
      </div>

      <div className="overview">
        <h2>Overview</h2>
        <p>Click on the boxes below to explore the definition of legal blindness, understand the causes of visual impairment, discover a range of occupations that visually impaired people can excel in, and read frequently asked questions for visually impaired persons.</p>
      </div>

      <div className="aspects">
        <div className="aspect">
          <Link to="./Definition" className="aspect-box">
            <h3>Definition of Legal Blindness</h3>
            <img src="https://www.verywellhealth.com/thmb/SGvUyDyBnFoGjgdfvig0-8dS-1E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Snellen_chart-7d82f27667194a91959b5ef2682d0a19.jpg" alt="Legal Blindness" />
          </Link>
        </div>

        <div className="aspect">
          <Link to="./Causes" className="aspect-box">
            <h3>Causes of the Impairment</h3>
            <img src="https://www.eyeluxoptometry.com/wp-content/uploads/el-4.jpg" alt="Causes of the Impairment" />
          </Link>
        </div>

        <div className="aspect">
          <Link to="./Occupation" className="aspect-box">
            <h3>Occupations for Visually Impaired People</h3>
            <img src="https://imageio.forbes.com/specials-images/imageserve/621437cc9f1a3ce593c0c4d0/Visually-impaired-professional-with-associate--discussing-documents/960x0.jpg?format=jpg&width=960" alt="Blind Occupations" />
          </Link>
        </div>

        <div className="aspect">
          <Link to="./FAQ" className="aspect-box">
            <h3>FAQs for Visually Impaired Individuals</h3>
            <img src="https://images.squarespace-cdn.com/content/v1/5c3fce60aa49a1ef6d89979c/1629146470270-P9P4F164GCN35QMWTEM3/blind-repair-questions-lovitt-blinds-drapery.jpg" alt="Frequently Asked Questions" />
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Learn;