import { useState, useEffect } from "react";
import { Card } from "./Card";
import { AddBook } from "./AddBook";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../store";
import { Book } from "../store/models/books";

export const BookList = () => {
  const [isAddBookModalOpen, setIsAddBookModalOpen] = useState(false);
	const dispatch = useDispatch<Dispatch>();
	const books = useSelector<RootState, Book[]>((state) => state.books.books);

	useEffect(() => {
		dispatch.books.fetchBooks();
	}, [dispatch.books]);

  const showModal = () => {
    setIsAddBookModalOpen(true);
  };

  const closeModal = () => {
    setIsAddBookModalOpen(false);
  };
  
  return (
    <div className="book-list">
      <div className="info">
        <p className="card-title">Books ({books.length})</p>
        <button className="add-button" onClick={showModal}>
          Add +
        </button>
      </div>
      {books.map((book) => (
        <Card key={book.id} {...book} />
      ))}
      {isAddBookModalOpen && (
        <div id="addModal" className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <p className="modal-title">Add Book</p>
              <button className="close" onClick={closeModal}>
                &times;
              </button>
            </div>
            <AddBook setModalOpen = {setIsAddBookModalOpen} />
          </div>
        </div>
      )}
    </div>
  );
};
