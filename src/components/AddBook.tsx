import { useSelector, useDispatch } from "react-redux";
import { RootState, Dispatch } from "../store";
import { Country } from "../store/models/countries";
import { Book } from "../store/models/books";
import { useEffect, useState } from "react";

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
    if (isbn.length > 0 && !/^[A-Za-z0-9\s]+$/.test(isbn)) {
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
      <form className="add-form" onSubmit={handleSubmit}>
        <div className="form-item">
          <label htmlFor="title">
            Title
            {titleError.length > 0 && <span className="error"> *</span>}
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="e.g. Fleisman is in Trouble: A Novel"
            onChange={(e) => {
              setTitle(e.target.value);
              setTitleError("");
            }}
            className={titleError.length > 0 ? "error-input" : ""}
          />
          <label htmlFor="author">
            Author
            {authorError.length > 0 && <span className="error"> **</span>}
          </label>
          <input
            type="text"
            id="author"
            name="author"
            placeholder="e.g. Taffy Brodesser-Akner"
            onChange={(e) => {
              setAuthor(e.target.value);
              setAuthorError("");
            }}
            className={authorError.length > 0 ? "error-input" : ""}
          />
          <label htmlFor="isbn">
            ISBN
            {isbnError.length > 0 && <span className="error"> ***</span>}
          </label>
          <input
            type="text"
            id="isbn"
            name="isbn"
            placeholder="e.g. c26b531a-8909-4125-893b-ea8b47020ec5"
            onChange={(e) => {
              setIsbn(e.target.value);
              setIsbnError("");
            }}
            className={isbnError.length > 0 ? "error-input" : ""}
          />
          <label htmlFor="publishedOn">
            Published On
            {publishedOnError.length > 0 && (
              <span className="error"> ****</span>
            )}
          </label>
          <input
            type="date"
            id="publishedOn"
            name="publishedOn"
            placeholder="e.g. Fleisman is in Trouble: A Novel"
            onChange={(e) => {
              setPublishedOn(e.target.value);
              setPublishedOnError("");
            }}
            className={publishedOnError.length > 0 ? "error-input" : ""}
          />
          <label htmlFor="numberOfPages">
            Number of Pages
            {numberOfPagesError.length > 0 && (
              <span className="error"> *****</span>
            )}
          </label>
          <input
            type="number"
            id="numberOfPages"
            name="numberOfPages"
            placeholder="e.g. 123"
            onChange={(e) => {
              setNumberOfPages(e.target.value);
              setNumberOfPagesError("");
            }}
            className={numberOfPagesError.length > 0 ? "error-input" : ""}
            min={1}
          />
          <label htmlFor="country">
            Country
            {countryError.length > 0 && <span className="error"> ******</span>}
          </label>
          <select
            name="country"
            id="country"
            onChange={(e) => {
              setCountry(e.target.value);
              setCountryError("");
            }}
            className={countryError.length > 0 ? "error-input" : ""}
          >
            <option value="">Choose country</option>
            {countries.map((country) => (
              <option key={country.id} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
          <div>
            <button className="submit-button" type="submit">
              Submit
            </button>
            <div className="error-message">
              {titleError.length > 0 && (
                <span className="error">* {titleError}</span>
              )}
              {authorError.length > 0 && (
                <span className="error">** {authorError}</span>
              )}
              {isbnError.length > 0 && (
                <span className="error">*** {isbnError}</span>
              )}
              {publishedOnError.length > 0 && (
                <span className="error">**** {publishedOnError}</span>
              )}
              {numberOfPagesError.length > 0 && (
                <span className="error">***** {numberOfPagesError}</span>
              )}
              {countryError.length > 0 && (
                <span className="error">****** {countryError}</span>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
