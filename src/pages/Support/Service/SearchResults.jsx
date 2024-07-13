import React from 'react';
import './SearchResults.css';

const SearchResults = ({ results }) => {
  return (
    <div className="search-results">
      {results && results.map((result) => (
        <div key={result.id} className="result-card">
          <img src={result.imageUrl} alt={result.text} />
          <h3>{result.text}</h3>
          <p>{result.description}</p>
          <a href={result.url} target="_blank" rel="noopener noreferrer">Learn more</a>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;