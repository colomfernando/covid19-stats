import axios from 'axios';
import { getQueries, QueryParam } from 'api/utils';
import { validateObj } from 'utils';
import localStorage from 'browser-localstorage-expire';

const localCache = localStorage();
const BASE_URL = 'https://covid-api.mmediagroup.fr/v1/';

interface ICase {
  confirmed: number;
  recovered: number;
  deaths: number;
  country: string;
  population: number;
  sq_km_area: number;
  life_expectancy: string;
  elevation_in_meters: number;
  continent: string;
  abbreviation: string;
  location: string;
  iso: number;
  capital_city: string;
  lat: string;
  long: string;
  updated: string;
}

export interface IError {
  message: string;
}

export const getCases = async (
  params?: QueryParam
): Promise<ICase | IError> => {
  try {
    const queries = params && validateObj(params) ? getQueries(params) : '';
    const { data } = await axios(`${BASE_URL}/cases${queries}`);

    if (!validateObj(data) || !Object.keys(data).length)
      throw new Error('There is no data to show');

    if (queries.indexOf('country' || 'ad') && !('All' in data))
      throw new Error('There is no data to show');

    const { All: response } = data;
    if (!validateObj(response)) throw new Error('There is no data to show');

    return response;
  } catch (reason) {
    return { message: reason.message };
  }
};

export const getCountries = async (): Promise<string[] | IError> => {
  try {
    const cache = localCache.getItem('countries');
    if (cache) return cache;
    const { data } = await axios(`${BASE_URL}/cases`);
    if (!validateObj(data) || !Object.keys(data).length)
      throw new Error('There is no data to show');

    const countries = Object.keys(data);
    localCache.setItem('countries', countries, 10);

    return countries;
  } catch (reason) {
    return { message: reason.message };
  }
};
