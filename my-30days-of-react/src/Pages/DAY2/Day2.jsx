import React from 'react';
import Booklist from './Booklist';

const Day2 = () => {
  const books = [
    {
      author: 'Jordan Moore',
      title: 'Interesting Facts For Curious Minds',
      img: './images/book-1.jpg',
    },
    {
      author: 'James Clear',
      title: 'Atomic Habits',
      img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    },
  ];

  return <Booklist/>;
}

export default Day2

// map - creates a new array from calling a function for every array element.

// const names = ['john', 'peter', 'susan'];
// const newNames = names.map((name) => {
//   console.log(name);
//   return <h1>{name}</h1>;
// });

// function BookList() {
//   return <section className='booklist'>{newNames}</section>;
// }