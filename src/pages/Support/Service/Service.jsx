import React, { useState } from 'react';
import { useHighContrast } from '../../../components/HighContrastContext';
import SearchResultsContainer from './SearchResults';
import './Service.css';

const Service = () => {
  const { isHighContrast } = useHighContrast();
  const locations = [
    { id: 1, text: 'Manhattan', image: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_391,q_75,w_588/v1/clients/newyorkstate/mariograzianophotography_Instagram_11d7bfa9-c11f-4feb-a919-13d479b99fd2.jpg' },
    { id: 2, text: 'Brooklyn', image: 'https://images.ctfassets.net/1aemqu6a6t65/68nkexvLlGiTxvxFvzoELk/68ee51265baad76b8d7f5ae8cd99bf2c/brooklyn-bridge-sunset-julienne-schaer.jpg' },
    { id: 3, text: 'Bronx', image: 'https://static01.nyt.com/images/2018/04/03/nyregion/03bxjail1/merlin_136305294_3f04a5b5-4fad-4bf6-bc28-0f9a300b3d82-articleLarge.jpg?quality=75&auto=webp&disable=upscale' },
    { id: 4, text: 'Staten Island', image: 'https://assets3.thrillist.com/v1/image/1762889/1200x600/scale;;webp=auto;jpeg_quality=85.jpg' },
    { id: 5, text: 'Queens', image: 'https://suitcaseandheels.com/wp-content/uploads/2023/02/long-island-city.jpeg' },
    { id: 6, text: 'Others/At Home', image: '/Others.png' },
  ];

  const ageRanges = [
    { id: 1, text: 'Under 10', image: 'https://www.hhs.texas.gov/sites/default/files/styles/large/public/assets/services/disability/blind-visually-impaired/blind-childrens-program.jpg?itok=7Y7mpBKX' },
    { id: 2, text: '11-21', image: 'https://media.istockphoto.com/id/1334509954/photo/acessible-college-diversity.jpg?s=612x612&w=0&k=20&c=p5wMnHJspsYZzYyG8skxhKIXh1dMVQ6845mj8iF_zAs=' },
    { id: 3, text: '22-54', image: 'https://www.perkins.org/wp-content/uploads/2021/10/248A1558-Edit-1024x683.jpg' },
    { id: 4, text: 'Over 55', image: 'https://www.homecareassistancetampabay.com/wp-content/uploads/Blind-Senior.jpg' },
    { id: 5, text: 'All Ages', image: 'https://aphconnectcenter.org/wp-content/uploads/sites/5/SupportGroups.jpg' },
  ];

  const serviceTypes = [
    { id: 1, text: 'Education & Training', image: 'https://www.perkins.org/wp-content/uploads/2021/06/Braille_int_video_THUMBNAIL-scaled.jpeg' },
    { id: 2, text: 'Medical & Rehabilitation Services', image: 'https://www.salusuhealth.com/_files/images/04112017_su-tei_080.jpg' },
    { id: 3, text: 'Social & Living Support', image: 'https://chicagolighthouse.org/wp-content/uploads/2015/10/DSC_0081-1024x678.jpg' },
    { id: 4, text: 'Employment & Career Development', image: 'https://vi.ie/wp-content/uploads/2023/05/Employment-LAN.jpg' },
    { id: 5, text: 'Technology & Assistive Devices', image: 'https://us.optelec.com/binaries/content/gallery/optelec-nl/landingspagina/loep-compact-hd.jpg' },
  ];

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedAgeRange, setSelectedAgeRange] = useState(null);
  const [selectedServiceType, setSelectedServiceType] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  const handleAgeRangeSelect = (ageRange) => {
    setSelectedAgeRange(ageRange);
  };

  const handleServiceTypeSelect = (serviceType) => {
    setSelectedServiceType(serviceType);
  };

  const handleGoButtonClick = () => {
    // Simulating search results based on selected criteria
    if (selectedLocation === 1 && selectedAgeRange === 3 && selectedServiceType === 4) {
      const results = [
        {
          id: 1,
          text: 'Business Enterprise Program (BEP)',
          description: 'The New York State Commission for the Blind (NYSCB)’s Business Enterprise Program (BEP) provides a rigorous BEP vendor training program that teaches NYSCB participants to successfully manage a deli, vending operation, newsstand, snack bar or cafeteria. Participants learn business math, labor and merchandise management, purchasing, legal requirements and customer service.',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJb8McuHIzgG6vQlk2swLzHbs0Owv2EqM3gA&s',
          website: 'https://ocfs.ny.gov/programs/nyscb/programs/enterprise.php'
        }
      ];
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className={isHighContrast ? 'high-contrast' : ''}>
      <div className="search-page">
        <header className="service-header">
          <h1>Special Programs Search Tool</h1>
          <p>Use this tool to find services that match your specific needs. Select your location, age range, and service type, then click on the GO button. Your result(s) will appear below.</p>
        </header>
        <div className="options-container">
          {/* Locations selection */}
          <div className="options-group">
            <div className="option-title">Locations</div>
            <div className="options-row">
              {locations.map(option => (
                <div
                  key={option.id}
                  className={`option ${selectedLocation === option.id ? 'selected' : ''}`}
                  onClick={() => handleLocationSelect(option.id)}
                >
                  <img src={option.image} alt={option.text} />
                  <div>{option.text}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Age ranges selection */}
          <div className="options-group">
            <div className="option-title">Age Ranges</div>
            <div className="options-row">
              {ageRanges.map(option => (
                <div
                  key={option.id}
                  className={`option ${selectedAgeRange === option.id ? 'selected' : ''}`}
                  onClick={() => handleAgeRangeSelect(option.id)}
                >
                  <img src={option.image} alt={option.text} />
                  <div>{option.text}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Service types selection */}
          <div className="options-group">
            <div className="option-title">Service Types</div>
            <div className="options-row">
              {serviceTypes.map(option => (
                <div
                  key={option.id}
                  className={`option ${selectedServiceType === option.id ? 'selected' : ''}`}
                  onClick={() => handleServiceTypeSelect(option.id)}
                >
                  <img src={option.image} alt={option.text} />
                  <div>{option.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* GO button */}
        <button className="go-button" onClick={handleGoButtonClick}>
          GO
        </button>

        {/* Search results */}
        {searchResults.length > 0 && (
          <div className="search-results">
            {searchResults.map((result) => (
              <div key={result.id} className="result-card">
                <div className="result-image">
                  <img src={result.imageUrl} alt={result.text} />
                </div>
                <div className="result-details">
                  <h3>{result.text}</h3>
                  <p>{result.description}</p>
                  <a href={result.website} target="_blank" rel="noopener noreferrer">Website</a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Service;