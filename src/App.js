import React, { useState, useEffect } from 'react';
import BookList from './components/booklist.component';

function App() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        setFilteredBooks(data);
      });
  }, []); //RUNNING ONE TIME ONLY

  useEffect(() => {
    setFilteredBooks(
      books.filter((book) => {
        return book.name.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, books]);

  return (
    <div className="container">
      <div className="row">
        <br />

        <BookList books={filteredBooks} />
        <input
          className="form-control"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
