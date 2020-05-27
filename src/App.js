import React, { useState, useEffect } from 'react';
import BookList from './components/booklist.component';
import SearchBook from './components/searchbook.component';

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
    console.log(search);

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
        <SearchBook search={search} setSearch={setSearch} />
      </div>
    </div>
  );
}

export default App;
