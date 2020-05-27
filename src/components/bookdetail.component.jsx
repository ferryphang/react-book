import React from 'react';

const BookDetail = (props) => {
  return <li className="list-group-item">{props.book.name}</li>;
};

export default BookDetail;
