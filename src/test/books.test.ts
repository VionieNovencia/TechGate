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

    mock
      .onGet("https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/books")
      .reply(200, responseData);

    await store.dispatch.books.fetchBooks();

    expect(store.getState().books.books).toEqual(responseData);
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

    mock
      .onPost(
        "https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/books",
        bookToAdd
      )
      .reply(201);

    await store.dispatch.books.addBook(bookToAdd);

    expect(store.getState().books.books.length).toBe(1);
    expect(store.getState().books.books[0]).toEqual(bookToAdd);
  });
});
