import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import store from "../store";
import { Book } from "../store/models/books";

describe("books", () => {
  const mock = new MockAdapter(axios);

  afterEach(() => {
    mock.reset();
    store.dispatch.books.setBooks([]);
  });

  it("should fetch books", async () => {
    const responseData: Book[] = [
        {
            id: "1",
            title: "Book 1",
            author: "Author 1",
            isbn: "123456789",
            publishedOn: "2023-01-01",
            numberOfPages: 100,
            country: "Indonesia",
            imageUrl: "https://example.com/image.png",
            createdAt: "2023-01-01",
        },
    ];
    jest.spyOn(axios, "get").mockResolvedValue({ data: responseData });
    await store.dispatch.books.fetchBooks();
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  it("should add a book", async () => {
    const bookToAdd: Book = {
      createdAt: "2023-05-27",
      title: "Sample Book",
      author: "Sample Author",
      isbn: "1234567890",
      publishedOn: "2023-01-01",
      numberOfPages: 200,
      country: "United States",
      imageUrl: "https://example.com/book.jpg",
      id: "1",
    };

    jest.spyOn(axios, "post").mockResolvedValue({ status: 201 });
    await store.dispatch.books.addBook(bookToAdd);
    expect(axios.post).toHaveBeenCalledTimes(1);
  });
});
