import { init, RematchRootState, RematchDispatch } from "@rematch/core";
import countries from "./models/countries";
import books from "./models/books";

export const models = { countries, books };

const store = init({
  models,
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<typeof models>;
export type RootState = RematchRootState<typeof models>;

export default store;