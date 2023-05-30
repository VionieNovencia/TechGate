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
    jest.spyOn(axios, "get").mockResolvedValue({ data: responseData });
    await store.dispatch.countries.fetchCountries();
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
