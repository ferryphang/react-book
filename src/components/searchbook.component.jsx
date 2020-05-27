import React from 'react';

const SearchBook = ({ search, setSearch }) => {
  return (
    <input
      className="form-control"
      type="search"
      placeholder={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};
export default SearchBook;
