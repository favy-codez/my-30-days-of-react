import Booklist from './Booklist';

const Day2 = () => {
  const books = [
    {
      author: 'Chimamanda Ngozi Adichie',
      title: 'Purple Hibiscus',
      img: 'https://m.media-amazon.com/images/I/51gfnebRhsL._SY445_SX342_.jpg',
    },
    {
      author: 'Chimamanda Ngozi Adichie',
      title: 'Americanah',
      img: 'https://m.media-amazon.com/images/I/41b6InkMuZL._SY445_SX342_.jpg',
    },
    {
      author: 'Chimamanda Ngozi Adichie',
      title: 'Half of a Yellow Sun',
      img: 'https://m.media-amazon.com/images/I/41vYTyIgiGL._SY445_SX342_.jpg',
    },
    {
      author: 'Chimamanda Ngozi Adichie',
      title: 'We Should All Be Feminists ',
      img: 'https://m.media-amazon.com/images/I/41-NznAOGjL._SY445_SX342_.jpg',
    },
    {
      author: 'Chimamanda Ngozi Adichie',
      title: 'The Thing Around Your Neck',
      img: 'https://m.media-amazon.com/images/I/31pmTFDWyZL._SY445_SX342_.jpg',
    },
    {
      author: 'Chimamanda Ngozi Adichie',
      title: 'Dear Ijeawele, or A Feminist Manifesto in Fifteen Suggestions',
      img: 'https://m.media-amazon.com/images/I/51YZWJvOGkL._SY445_SX342_.jpg',
    }
  ];

  return (
    <>
      <h1 className='day1header'>DAY 2</h1>
      <p className='day1text'>Learnt how to use</p>
      <section className='booklist'>
        <Booklist/>
        <Booklist/>
        <Booklist/>
      </section>
    </>
  );
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