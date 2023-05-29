import { Book } from '../store/models/books';

export const Card = ( book : Book) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };
    return (
      <div className="card">
        <div className="card-info">
          <p className="card-title">{book.title}</p>
          <p className="card-author">Book by {book.author}</p>
          <div className="grid-container">
            <div className="item1">
              <p className="item-title">ISBN</p>
              <p>{book.isbn}</p>
            </div>
            <div className="item2">
              <p className="item-title">Number of Page</p>
              <p>{book.numberOfPages}</p>
            </div>
            <div className="item3">
              <p className="item-title">Published on </p>
              <p>{formatDate(book.publishedOn)}</p>
            </div>
            <div className="item4">
              <p className="item-title">Country Publisher</p>
              <p>{book.country}</p>
            </div>
          </div>
        </div>
        <div className="card-image">
          <img src={book.imageUrl} alt={book.title} />
        </div>
      </div>
    );
}