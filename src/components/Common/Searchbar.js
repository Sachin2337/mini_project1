import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Basic input validation (not empty)
    if (!searchQuery.trim()) {
      alert('Please enter a search query.');
      return;
    }

    // Sanitize user input to prevent XSS
    const sanitizedQuery = sanitizeInput(searchQuery);

    // Perform the search with the sanitized query
    onSearch(sanitizedQuery);
  };

  const handleClear = () => {
    setSearchQuery('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const sanitizeInput = (input) => {
    // Implement a function to sanitize user input here
    // You can use a library like DOMPurify for this purpose
    // Example:
    // import DOMPurify from 'dompurify';
    // const sanitizedInput = DOMPurify.sanitize(input);
    // return sanitizedInput;

    // For a simplified example, just trim the input and escape HTML entities
    return input.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;');
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        aria-label="Search"
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-primary"
          type="button"
          onClick={handleSearch}
        >
          Search
        </button>
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={handleClear}
          aria-label="Clear"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
