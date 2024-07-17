import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './MiniSearch.css';
import MiniSearch from 'minisearch';
import keywordLists from '../config/keywordLists';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const MiniSearchComponent = ({ data }) => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const miniSearch = new MiniSearch({ fields: ['title', 'link'] });
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    miniSearch.addAll(data);
  }, [data]);

  const handleSearch = () => {
    console.log("Search triggered"); // 检查是否触发
    const trimmedQuery = query.trim();
    if (trimmedQuery.length > 0) {
      const results = miniSearch.search(trimmedQuery);
      console.log("Search results:", results); // 检查搜索结果
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const clearSearchResults = () => {
    setSearchResults([]);
    setQuery('');
  };

  const getPageFromKeyword = (keyword) => {
    for (let page in keywordLists) {
      if (keywordLists[page].includes(keyword)) {
        return `/${page.toLowerCase()}`; 
      }
    }
    return '/'; 
  };

  const handleResultClick = (title) => {
    const keyword = title.toLowerCase();
    const path = getPageFromKeyword(keyword);
    navigate(path); // Use navigate to navigate to the correct page
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="search-input"
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
      <FontAwesomeIcon
        icon={faSearch}
        className="search-icon"
        onClick={handleSearch}
      />

      {searchResults.length > 0 && (
        <div className="search-results">
          <button className="close-button" onClick={clearSearchResults}>
            Close
          </button>
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>
                <button
                  onClick={() => handleResultClick(result.title)}
                  className="result-button"
                >
                  {result.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MiniSearchComponent;