import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './MiniSearch.css';
import MiniSearch from 'minisearch';
import keywordLists from '../config/keywordLists';

const MiniSearchComponent = ({ data }) => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const miniSearch = new MiniSearch({ fields: ['title', 'link'] });

  useEffect(() => {
    miniSearch.addAll(data);
  }, [data]);

  const handleSearch = () => {
    const trimmedQuery = query.trim();
    if (trimmedQuery.length > 0) {
      const results = miniSearch.search(trimmedQuery);
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
        return `/${page}`; // 返回页面路径
      }
    }
    return '/'; // 如果未找到，默认返回首页
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
                <a href={getPageFromKeyword(result.title.toLowerCase())}>{result.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MiniSearchComponent;