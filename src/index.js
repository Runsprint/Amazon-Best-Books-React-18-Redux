import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import books from "./books";
import Book from "./book";
//mshobeli
const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id); // find method from js for find element by id
    console.log(book);
  };

  return (
    <>
      <h1 className="title">Amazon Best Seller</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return (
            <Book {...book} key={book.id} getBook={getBook} number={index} />
          );
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
