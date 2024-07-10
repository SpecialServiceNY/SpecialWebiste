import React, { useState, useEffect } from 'react';
import { useHighContrast } from '../../../components/HighContrastContext';
import './Causes.css'; // Import your CSS file

const Causes = () => {
  const { isHighContrast } = useHighContrast();
  const [activeTab, setActiveTab] = useState('RefractiveErrors');
  const [tabsClicked, setTabsClicked] = useState({
    RefractiveErrors: false,
    Cataracts: false,
    DiabeticRetinopathy: false,
    Glaucoma: false
  });
  const [allTabsClicked, setAllTabsClicked] = useState(false);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setTabsClicked((prevTabsClicked) => ({
      ...prevTabsClicked,
      [tabName]: true
    }));
  };

  useEffect(() => {
    if (tabsClicked.RefractiveErrors && tabsClicked.Cataracts && tabsClicked.DiabeticRetinopathy && tabsClicked.Glaucoma) {
      setAllTabsClicked(true);
    }
  }, [tabsClicked]);

  return (
    <div className={isHighContrast ? 'high-contrast' : ''}>
      <div className="causes-page">
        <div className="page-header">
          <h1>Causes of Visual Impairment</h1>
          <p>Explore the various causes of visual impairment and learn more about their effects and treatments.</p>
        </div>

        <div className="tabs">
          <button
            className={`tab-button ${activeTab === 'RefractiveErrors' ? 'active' : ''}`}
            onClick={() => handleTabClick('RefractiveErrors')}
          >
            Refractive Errors
          </button>
          <button
            className={`tab-button ${activeTab === 'Cataracts' ? 'active' : ''}`}
            onClick={() => handleTabClick('Cataracts')}
          >
            Cataracts
          </button>
          <button
            className={`tab-button ${activeTab === 'DiabeticRetinopathy' ? 'active' : ''}`}
            onClick={() => handleTabClick('DiabeticRetinopathy')}
          >
            Diabetic Retinopathy
          </button>
          <button
            className={`tab-button ${activeTab === 'Glaucoma' ? 'active' : ''}`}
            onClick={() => handleTabClick('Glaucoma')}
          >
            Glaucoma
          </button>
          <button
            className={`tab-button ${activeTab === 'MacularDegeneration' ? 'active' : ''}`}
            onClick={() => handleTabClick('MacularDegeneration')}
          >
            Age-related Macular Degeneration
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'RefractiveErrors' && (
            <div>
              <h2>Refractive Errors</h2>
              <p>Refractive errors occur when the shape of the eye prevents light from focusing directly on the retina, leading to blurred vision.</p>
              <p>Common types include nearsightedness (myopia), farsightedness (hyperopia), and astigmatism.</p>
              <p>Treatment options include eyeglasses, contact lenses, and refractive surgery.</p>
            </div>
          )}

          {activeTab === 'Cataracts' && (
            <div>
              <h2>Cataracts</h2>
              <p>Cataracts cause clouding of the lens in the eye, leading to blurry vision and eventually blindness if untreated.</p>
              <p>Age-related cataracts are most common, but they can also be caused by injury, medications, or other health conditions.</p>
              <p>Treatment involves surgical removal of the cloudy lens and replacement with an artificial lens.</p>
            </div>
          )}

          {activeTab === 'DiabeticRetinopathy' && (
            <div>
              <h2>Diabetic Retinopathy</h2>
              <p>Diabetic retinopathy is a complication of diabetes that affects the blood vessels in the retina, leading to vision loss.</p>
              <p>It can cause leaking of blood vessels, swelling of the retina, and growth of abnormal blood vessels.</p>
              <p>Treatment includes managing diabetes through diet, exercise, and medication, along with laser surgery or injections to reduce vision loss.</p>
            </div>
          )}

          {activeTab === 'Glaucoma' && (
            <div>
              <h2>Glaucoma</h2>
              <p>Glaucoma is a group of eye conditions that damage the optic nerve, often due to high pressure inside the eye.</p>
              <p>It can lead to gradual loss of peripheral vision and, if untreated, blindness.</p>
              <p>Treatment aims to lower intraocular pressure through eye drops, medications, laser surgery, or conventional surgery.</p>
            </div>
          )}

          {activeTab === 'MacularDegeneration' && (
            <div>
              <h2>Age-related Macular Degeneration</h2>
              <p>Age-related macular degeneration (AMD) affects the macula, the central part of the retina responsible for sharp central vision.</p>
              <p>It can cause blurred or distorted vision, making it difficult to read or recognize faces.</p>
              <p>Treatment includes lifestyle changes, dietary supplements, and certain medications, but there is no cure.</p>
            </div>
          )}
        </div>

        {allTabsClicked && (
          <div className="additional-content">
             <p className="highlighted">Thank you for exploring the causes of visual impairment.</p>
            <p>Learn more about the definition of legal blindness:</p>
            <ul>
              <li><a href="./Definition">Definition</a></li>
            </ul>
            <p>Learn more about the occupations that blind people can pursue:</p>
            <ul>
              <li><a href="./Occupation">Occupation</a></li>
            </ul>
            <p>Learn more about the frequently asked questions towards blind people:</p>
            <ul>
              <li><a href="./FAQ">FAQ</a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Causes;