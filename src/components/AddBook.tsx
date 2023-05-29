import { useSelector, useDispatch } from "react-redux";
import { RootState, Dispatch } from "../store";
import { Country } from "../store/models/countries";
import { Book } from "../store/models/books";
import React, { useEffect, useState } from "react";
import { AddForm, Input, SubmitButton, Select, Label, ErrorMessage, FormItem, Error } from "../style/Form";

export const AddBook = ({
  setModalOpen,
}: {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const dispatch = useDispatch<Dispatch>();
  const countries = useSelector<RootState, Country[]>(
    (state) => state.countries.countries
  );
  const books = useSelector<RootState, Book[]>((state) => state.books.books);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [publishedOn, setPublishedOn] = useState("");
  const [numberOfPages, setNumberOfPages] = useState("");
  const [country, setCountry] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [titleError, setTitleError] = useState("");
  const [authorError, setAuthorError] = useState("");
  const [isbnError, setIsbnError] = useState("");
  const [publishedOnError, setPublishedOnError] = useState("");
  const [numberOfPagesError, setNumberOfPagesError] = useState("");
  const [countryError, setCountryError] = useState("");

  useEffect(() => {
    dispatch.countries.fetchCountries();
  }, [dispatch.countries]);

  useEffect(() => {
    dispatch.books.fetchBooks();
  }, [dispatch.books]);

  const validateForm = () => {
    if (title.length === 0) {
      setTitleError("Title is required");
    }
    if (author.length === 0) {
      setAuthorError("Author is required");
    }
    if (isbn.length === 0) {
      setIsbnError("ISBN is required");
    }
    if (publishedOn.length === 0) {
      setPublishedOnError("Published On is required");
    }
    if (numberOfPages.length === 0) {
      setNumberOfPagesError("Number of Pages is required");
    }
    if (country.length === 0) {
      setCountryError("Country is required");
    }
    if (title.length > 0 && !/^[A-Za-z0-9\s]+$/.test(title)) {
      setTitleError("Title not valid");
    }
    if (author.length > 0 && !/^[A-Za-z0-9\s]+$/.test(author)) {
      setAuthorError("Author not valid");
    }
    if (isbn.length > 0 && !/^[a-zA-Z0-9-]+$/.test(isbn)) {
      setIsbnError("ISBN not valid");
    }
    setIsLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("form submitted1");
    setIsLoading(true);
    validateForm();
    
    if (!isLoading) {
      if(titleError.length > 0 || authorError.length > 0 || isbnError.length > 0 || publishedOnError.length > 0 || numberOfPagesError.length > 0 || countryError.length > 0) {
        return;
      }
      if(title.length === 0 || author.length === 0 || isbn.length === 0 || publishedOn.length === 0 || numberOfPages.length === 0 || country.length === 0) {
        return;
      }
      const book = {
        title,
        author,
        isbn,
        publishedOn,
        numberOfPages,
        country,
        imageUrl: "https://picsum.photos/200/300",
        id: books.length,
      };
      dispatch.books.addBook(book);
      e.currentTarget.reset();
      setTitle("");
      setAuthor("");
      setIsbn("");
      setPublishedOn("");
      setNumberOfPages("");
      setCountry("");
      setTitleError("");
      setAuthorError("");
      setIsbnError("");
      setPublishedOnError("");
      setNumberOfPagesError("");
      setCountryError("");
      setModalOpen(false);
      alert("Book added successfully");
    }
  };

  return (
    <div>
      <AddForm onSubmit={handleSubmit}>
        <FormItem>
          <label htmlFor="title">
            Title
            {titleError.length > 0 && <Error> *</Error>}
          </label>
          <Input
            type="text"
            id="title"
            name="title"
            placeholder="e.g. Fleisman is in Trouble: A Novel"
            onChange={(e) => {
              setTitle(e.target.value);
              setTitleError("");
            }}
            style={{ border: titleError.length > 0 ? "1px solid red" : "" }}
          />
          <Label htmlFor="author">
            Author
            {authorError.length > 0 && <Error> **</Error>}
          </Label>
          <Input
            type="text"
            id="author"
            name="author"
            placeholder="e.g. Taffy Brodesser-Akner"
            onChange={(e) => {
              setAuthor(e.target.value);
              setAuthorError("");
            }}
            style={{ border: authorError.length > 0 ? "1px solid red" : "" }}
          />
          <Label htmlFor="isbn">
            ISBN
            {isbnError.length > 0 && <Error> ***</Error>}
          </Label>
          <Input
            type="text"
            id="isbn"
            name="isbn"
            placeholder="e.g. c26b531a-8909-4125-893b-ea8b47020ec5"
            onChange={(e) => {
              setIsbn(e.target.value);
              setIsbnError("");
            }}
            style={{ border: isbnError.length > 0 ? "1px solid red" : "" }}
          />
          <Label htmlFor="publishedOn">
            Published On
            {publishedOnError.length > 0 && <Error> ****</Error>}
          </Label>
          <Input
            type="date"
            id="publishedOn"
            name="publishedOn"
            placeholder="e.g. Fleisman is in Trouble: A Novel"
            onChange={(e) => {
              setPublishedOn(e.target.value);
              setPublishedOnError("");
            }}
            style={{ border: publishedOnError.length > 0 ? "1px solid red" : "" }}
          />
          <Label htmlFor="numberOfPages">
            Number of Pages
            {numberOfPagesError.length > 0 && <Error> *****</Error>}
          </Label>
          <Input
            type="number"
            id="numberOfPages"
            name="numberOfPages"
            placeholder="e.g. 123"
            onChange={(e) => {
              setNumberOfPages(e.target.value);
              setNumberOfPagesError("");
            }}
            style={{ border: numberOfPagesError.length > 0 ? "1px solid red" : "" }}
            min={1}
          />
          <Label htmlFor="country">
            Country
            {countryError.length > 0 && <Error> ******</Error>}
          </Label>
          <Select
            name="country"
            id="country"
            onChange={(e) => {
              setCountry(e.target.value);
              setCountryError("");
            }}
            style={{ border: countryError.length > 0 ? "1px solid red" : "" }}
          >
            <option value="">Choose country</option>
            {countries.map((country) => (
              <option key={country.id} value={country.name}>
                {country.name}
              </option>
            ))}
          </Select>
          <div>
            <SubmitButton type="submit">Submit</SubmitButton>
            <ErrorMessage>
              {titleError.length > 0 && <Error>* {titleError}</Error>}
              {authorError.length > 0 && <Error>** {authorError}</Error>}
              {isbnError.length > 0 && <Error>*** {isbnError}</Error>}
              {publishedOnError.length > 0 && (
                <Error>**** {publishedOnError}</Error>
              )}
              {numberOfPagesError.length > 0 && (
                <Error>***** {numberOfPagesError}</Error>
              )}
              {countryError.length > 0 && <Error>****** {countryError}</Error>}
            </ErrorMessage>
          </div>
        </FormItem>
      </AddForm>
    </div>
  );
};
