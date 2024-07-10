import React from 'react';
import './SearchResults.css';

export const searchResultsData = [
  {
    id: 1,
    locationId: 3,
    ageRangeId: 2,
    serviceTypeId: 1,
    title: 'Schermerhorn Program',
    description: 'The Schermerhorn Program has a 190-year history of serving students with blindness and visual impairments. It offers diverse educational services to meet the needs of children who are legally blind, from the ages of 5 to 21.',
    image: 'https://3.files.edl.io/d7d1/23/08/21/190246-d4a29c1d-6463-4e84-97a6-c979c98b4e08.jpg',
    link: 'https://www.nyise.org/apps/pages/index.jsp?uREC_ID=409369&type=d&pREC_ID=892615'
  },
  {
    id: 2,
    locationId: 1,
    ageRangeId: 3,
    serviceTypeId: 2,
    title: 'Result 2',
    description: 'Description of Result 2',
    image: 'https://example.com/image2.jpg',
    link: 'https://example.com/result2'
  },
  // Add more results as needed
];

const SearchResults = ({ results }) => {
  if (!results || results.length === 0) {
    return <div>No results found.</div>;
  }

  return (
    <div className="search-results" id="search-results">
      <h2>Search Results</h2>
      <div className="results-grid">
        {results.map((result) => (
          <div key={result.id} className="result-card">
            <img src={result.image} alt={result.title} className="result-image" />
            <div className="result-content">
              <h3 className="result-title">{result.title}</h3>
              <p className="result-description">{result.description}</p>
              <a href={result.link} target="_blank" rel="noopener noreferrer">Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;