//shvili
const Book = (props) => {
  const { author, title, img, getBook, id, number } = props;
  const getSingleBook = () => {
    getBook(id);
  };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button onClick={getSingleBook}>Click Me</button>
      <span className="number">{`#  ${number + 1}`}</span>
    </article>
  );
};
export default Book;
