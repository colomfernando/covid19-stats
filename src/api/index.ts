import axios from 'axios';
import { getQueries, QueryParam } from 'api/utils';
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

export const getCases = async (
  params?: QueryParam
): Promise<ICases | IError> => {
  try {
    const queries = params && validateObj(params) ? getQueries(params) : '';
    const { data } = await axios(`${BASE_URL}/cases${queries}`);
    if (!validateObj(data) || !Object.keys(data).length)
      throw new Error('There is no data to show');

    if (queries.indexOf('country' || 'ad') && !('All' in data))
      throw new Error('There is no data to show');
    return data;
  } catch (reason) {
    return { message: reason.message };
  }
};
