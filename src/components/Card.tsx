import { Book } from '../store/models/books';
import React from 'react';
import { CardContainer, CardInfo, CardAuthor, CardImage, CardTitle, CardGrid, CardGridItemTitle } from '../style/Card';

export const Card = ( book : Book) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };
    return (
      <CardContainer>
        <CardInfo>
          <CardTitle>{book.title}</CardTitle>
          <CardAuthor>Book by {book.author}</CardAuthor>
          <CardGrid>
            <div>
              <CardGridItemTitle>ISBN</CardGridItemTitle>
              <p>{book.isbn}</p>
            </div>
            <div>
              <CardGridItemTitle>Number of Page</CardGridItemTitle>
              <p>{book.numberOfPages}</p>
            </div>
            <div>
              <CardGridItemTitle>Published on </CardGridItemTitle>
              <p>{formatDate(book.publishedOn)}</p>
            </div>
            <div>
              <CardGridItemTitle>Country Publisher</CardGridItemTitle>
              <p>{book.country}</p>
            </div>
          </CardGrid>
        </CardInfo>
        <CardImage>
          <img src={book.imageUrl} alt={book.title} />
        </CardImage>
      </CardContainer>
    );
}