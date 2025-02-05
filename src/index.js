import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const firstBook = {
  author: "Dani kalafe",
  title: "The Let Them Theory",
  img: "https://m.media-amazon.com/images/I/91I1KDnK1kL._SL1500_.jpg",
};

const secoundBook = {
  author: "Dr. Nicole Apelian",
  title: "Forgotten Home Apothecary : 250 Powerful Remedies at Your Fingertips",
  img: "https://m.media-amazon.com/images/I/91-E86oM2IL._SL1500_.jpg",
};

const BookList = () => {
  return (
    <section className='booklist'>
      <Book
        title={secoundBook.title}
        author={secoundBook.author}
        img={secoundBook.img}
      />
      <Book
        title={firstBook.title}
        author={firstBook.author}
        img={firstBook.img}
      />
    </section>
  );
};

const Book = (props) => {
  console.log(props.img);
  return (
    <article className='book'>
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
