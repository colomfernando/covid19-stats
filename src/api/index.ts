import axios from 'axios';
import { validateObj } from 'utils';

const BASE_URL = 'https://covid-api.mmediagroup.fr/v1/';

interface ICase {
  confirmed: number;
  recovered: number;
  deaths: number;
  country: string;
  population: number;
  sq_km_area: number;
  life_expectancy: string;
  elevation_in_meters: null;
  continent: string;
  abbreviation: string;
  location: string;
  iso: number;
  capital_city: string;
  lat: string;
  long: string;
  updated: string;
}

interface ICases {
  [key: string]: {
    [key: string]: ICase;
  };
}

interface IError {
  message: string;
}

export const getCases = async (): Promise<ICases | IError> => {
  try {
    const { data } = await axios(`${BASE_URL}/cases`);
    if (!validateObj(data) || !Object.keys(data).length)
      throw new Error('There is no data to show');
    return data;
  } catch (reason) {
    return { message: reason.message };
  }
};
