import React from 'react';

const Book = (props) => {
// using destructuring inside a component to access props
const { img, title, author, children } = props;
  return (
    <article className='book'>
      <img src={img} alt={props.title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      {children}
    </article>
  )
}

export default Book

// destructure in function parameters (in our case props)

// const Book = ({ img, title, author }) => {
//   return (
//     <article className='book'>
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author} </h4>
//     </article>
//   );
// };