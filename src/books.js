import img1 from "./images/book-1.jpg";
import img2 from "./images/book-2.jpg";
import img3 from "./images/book-3.jpg";

const books = [
  {
    author: "Britney Spears",
    title: "The Woman in Me",
    img: img1,
    id: 1,
  },
  {
    author: "Barbra Streisand",
    title: "My Name Is Barbra",
    img: img2,
    id: 2,
  },
  {
    author: "Jonathan Karl ",
    title: "Tired of Winning: Donald Trump and the End of the Grand Old Party",
    img: img3,
    id: 3,
  },
];
//if we have eport default, u can change name how u want when u import, but without "defaulte" u cann't change name of export array or something.

export default books;
