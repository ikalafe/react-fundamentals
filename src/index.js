import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    author: "Dr. Nicole Apelian",
    title:
      "Forgotten Home Apothecary : 250 Powerful Remedies at Your Fingertips",
    img: "https://m.media-amazon.com/images/I/91-E86oM2IL._SL1500_.jpg",
    id: 1,
  },

  {
    author: "Dani kalafe",
    title: "The Let Them Theory",
    img: "https://m.media-amazon.com/images/I/91I1KDnK1kL._SL1500_.jpg",
    id: 2,
  },
];
const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
