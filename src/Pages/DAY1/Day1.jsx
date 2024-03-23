import React from 'react';
import Book from './Book';

const Day1 = () => {
  const firstBook = {
    author: 'Chimamanda Ngozi Adichie',
    title: 'Purple Hibiscus',
    img: 'https://m.media-amazon.com/images/I/51gfnebRhsL._SY445_SX342_.jpg',
  };
  const secondBook = {
    author: 'Chimamanda Ngozi Adichie',
    title: 'Americanah',
    img: 'https://m.media-amazon.com/images/I/41b6InkMuZL._SY445_SX342_.jpg',
  };
  const thirdBook = {
    author: 'Chimamanda Ngozi Adichie',
    title: 'Half of a Yellow Sun',
    img: 'https://m.media-amazon.com/images/I/41vYTyIgiGL._SY445_SX342_.jpg',
  };
  const fourthBook = {
    author: 'Chimamanda Ngozi Adichie',
    title: 'We Should All Be Feminists ',
    img: 'https://m.media-amazon.com/images/I/41-NznAOGjL._SY445_SX342_.jpg',
  };
  const fifthBook = {
    author: 'Chimamanda Ngozi Adichie',
    title: 'The Thing Around Your Neck',
    img: 'https://m.media-amazon.com/images/I/31pmTFDWyZL._SY445_SX342_.jpg',
  };
  const sixthBook = {
    author: 'Chimamanda Ngozi Adichie',
    title: 'Dear Ijeawele, or A Feminist Manifesto in Fifteen Suggestions',
    img: 'https://m.media-amazon.com/images/I/51YZWJvOGkL._SY445_SX342_.jpg',
  };
  return (
    <>
      <h1 className='day1header'>DAY 1</h1>
      <p className='day1text'>Learnt how to use props using my president Books</p>
      <section className='booklist'>
        <Book
          author={firstBook.author}
          title={firstBook.title}
          img={firstBook.img}
        >
          {/* learnt about a special property(prop) called a children property */}
          <button>Click me</button>
        </Book>
        <Book
          author={secondBook.author}
          title={secondBook.title}
          img={secondBook.img}
        />
        <Book
          author={thirdBook.author}
          title={thirdBook.title}
          img={thirdBook.img}
        />
        <Book
          author={fourthBook.author}
          title={fourthBook.title}
          img={fourthBook.img}
        />
        <Book
          author={fifthBook.author}
          title={fifthBook.title}
          img={fifthBook.img}
        />
        <Book
          author={sixthBook.author}
          title={sixthBook.title}
          img={sixthBook.img}
        />
      </section>
    </>
  )
}
export default Day1