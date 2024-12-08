import React from 'react';

function SearchBar({ searchQuery, onSearch }) {
    return (
        <input
            type="text"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            style={{ marginBottom: '10px', padding: '5px', width: '100%' }}
        />
    );
}

export default SearchBar;
