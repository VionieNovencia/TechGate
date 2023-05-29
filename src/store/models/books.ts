import axios from "axios";
import { Dispatch } from "..";

export type Book = {
  createdAt: string;
  title: string;
  author: string;
  isbn: string;
  publishedOn: string;
  numberOfPages: number;
  country: string;
  imageUrl: string;
  id: string;
};

type BooksState = {
  books: Book[];
};

const books: any = {
  state: {
    books: [],
  },
  reducers: {
    setBooks(state: BooksState, books: Book[]) {
      return { ...state, books };
    },
  },
  effects: (dispatch: Dispatch) => ({
    async fetchBooks() {
      try {
        const response = await axios.get<Book[]>(
          "https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/books"
        );
        dispatch.books.setBooks(response.data);
      } catch (error) {
        console.error("Failed to fetch books:", error);
      }
    },

    async addBook(book: Book) {
      try {
        await axios.post<Book>(
          "https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/books",
          book
        );
        dispatch.books.fetchBooks();
      } catch (error) {
        console.error("Failed to add book:", error);
      }
    },
  }),
};

export default books;
