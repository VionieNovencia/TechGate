import { useState, useEffect } from "react";
import { Card } from "./Card";
import { AddBook } from "./AddBook";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../store";
import { Book } from "../store/models/books";
import React from "react";
import { BookListContainer, BookListInfo, AddButton } from "../style/BookList";
import { CardTitle } from "../style/Card";
import { ModalContainer, ModalTitle, ModalHeader, ModalContent, CloseButton } from "../style/Modal";

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
    <BookListContainer>
      <BookListInfo>
        <CardTitle>Books ({books.length})</CardTitle>
        <AddButton onClick={showModal}>
          Add +
        </AddButton>
      </BookListInfo>
      {books.map((book) => (
        <Card key={book.id} {...book} />
      ))}
      {isAddBookModalOpen && (
        <ModalContainer id="addModal">
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Add Book</ModalTitle>
              <CloseButton onClick={closeModal}>
                &times;
              </CloseButton>
            </ModalHeader>
            <AddBook setModalOpen = {setIsAddBookModalOpen} />
          </ModalContent>
        </ModalContainer>
      )}
    </BookListContainer>
  );
};
