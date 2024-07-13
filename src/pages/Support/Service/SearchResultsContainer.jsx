import React, { useState } from 'react';
import SearchResults from './SearchResults';
import './SearchResults.css';

const SearchResultsContainer = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = [
      { id: 1, text: 'Search Result 1', description: 'Description of Search Result 1', imageUrl: '/images/result1.jpg', url: 'https://example.com/result1' },
      { id: 2, text: 'Search Result 2', description: 'Description of Search Result 2', imageUrl: '/images/result2.jpg', url: 'https://example.com/result2' },
      { id: 3, text: 'Search Result 3', description: 'Description of Search Result 3', imageUrl: '/images/result3.jpg', url: 'https://example.com/result3' },
    ];
    setSearchResults(results); // 更新搜索结果状态
  };

  return (
    <div>
      <button className="go-button" onClick={handleSearch}>GO</button>
      <SearchResults results={searchResults} />
    </div>
  );
};

export default SearchResultsContainer;