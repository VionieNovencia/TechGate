import axios from "axios";
import { Dispatch } from "..";

export type Country = {
  id: string;
  name: string;
  createdAt: string;
};

type CountriesState = {
  countries: Country[];
};

const countries : any = {
  state: {
    countries: [],
  },
  reducers: {
    setCountries(state : CountriesState, countries: Country[]) {
      return { ...state, countries };
    },
  },
  effects: (dispatch: Dispatch) => ({
    async fetchCountries() {
      try {
        const response = await axios.get<Country[]>(
          "https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/countries"
        );
        dispatch.countries.setCountries(response.data);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      }
    },
  }),
};

export default countries;
