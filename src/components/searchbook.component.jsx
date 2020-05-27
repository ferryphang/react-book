import React from 'react';

const SearchBook = ({ search, handleSearchChange }) => {
  return (
    <input
      className="form-control"
      type="search"
      placeholder={search}
      onChange={handleSearchChange}
    />
  );
};
export default SearchBook;
