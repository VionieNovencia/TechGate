import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import store from "../store";
import { Country } from "../store/models/countries";

describe("countries", () => {
  const mock = new MockAdapter(axios);

  afterEach(() => {
    mock.reset();
    store.dispatch.countries.setCountries([]);
  });

  it("should fetch countries", async () => {
    const responseData: Country[] = [
      {
        id: "1",
        name: "Country 1",
        createdAt: "2023-01-01",
      },
    ];

    mock
      .onGet("https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/countries")
      .reply(200, responseData);

    await store.dispatch.countries.fetchCountries();

    expect(store.getState().countries.countries).toEqual(responseData);
  });
});
