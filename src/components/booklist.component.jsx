import React from 'react';
import BookDetail from './bookdetail.component';

const BookList = (props) => {
  return (
    <div>
      <h2>Book List</h2>
      <ul className="list-group">
        {props.books.map((book) => {
          return <BookDetail key={book.id} book={book} />;
        })}
      </ul>
    </div>
  );
};

export default BookList;
