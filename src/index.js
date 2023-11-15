import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const books = [
  {
    author: "Britney Spears",
    title: "The Woman in Me",
    img: "https://images-na.ssl-images-amazon.com/images/I/61BWsc9eGbL._AC_UL300_SR300,200_.jpg",
    id: 1,
  },
  {
    author: "Barbra Streisand",
    title: "My Name Is Barbra",
    img: "https://m.media-amazon.com/images/I/81KuLAC1XdL._SY425_.jpg",
    id: 2,
  },
];
//mshobeli
const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };

  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
};
//shvili
const Book = (props) => {
  const { author, title, img, getBook, id } = props;
  const getSingleBook = () => {
    getBook(id);
  };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button onClick={getSingleBook}>Click Me</button>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
