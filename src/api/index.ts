import axios from 'axios';
import { getQueries, QueryParam } from 'api/utils';
import { validateObj, validateString } from 'utils';
import { IGlobalPayload } from 'store/interfaces';
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

interface IHistory {
  administered: number;
  people_vaccinated: number;
  people_partially_vaccinated: number;
  country: string;
  population: number;
  sq_km_area: number;
  life_expectancy: string;
  elevation_in_meters: number;
  continent: string;
  abbreviation: string;
  location: string;
  iso: string;
  capital_city: string;
  lat: string;
  long: string;
  updated: string;
}

export interface IInitialData {
  global: IGlobalPayload;
  countries: string[];
}
export interface IError {
  message: string;
}

export interface IErrorInitialData extends IError {
  countries: [];
  Global: Record<string, never>;
}
interface IConfigApi {
  [key: string]: {
    endpoint: string;
  };
}

const configApi: IConfigApi = {
  cases: {
    endpoint: `${BASE_URL}/cases`,
  },
  vaccines: {
    endpoint: `${BASE_URL}/vaccines`,
  },
  history: {
    endpoint: `${BASE_URL}/history`,
  },
};

export const getInitialData = async (): Promise<
  IInitialData | IErrorInitialData
> => {
  try {
    const cache = localCache.getItem('initialData');
    if (cache) return cache;

    const { data } = await axios(`${BASE_URL}/cases`);
    if (!validateObj(data) || !Object.keys(data).length)
      throw new Error('There is no data to show');

    const { Global } = data;
    const { All: global } = Global;
    const countries = Object.keys(data).filter((key) => key !== 'Global');
    const initialData = { countries, global };

    localCache.setItem('initialData', initialData, 2);

    return initialData;
  } catch (reason) {
    return { message: reason.message, countries: [], Global: {} };
  }
};

export const getData = async (
  params: QueryParam
): Promise<ICase | IHistory | IError> => {
  try {
    if (!validateObj(params) || !Object.keys(params).length)
      throw new Error('params arg is invalid or null');

    const { type } = params;
    if (!type || !validateString(type))
      throw new Error('value type must be a valid string');

    const config = type in configApi ? configApi[type] : configApi.cases;

    if (!validateObj(config) || !Object.keys(config).length)
      throw new Error('config is invalid or null');

    const queries = params && validateObj(params) ? getQueries(params) : '';
    const { data } = await axios(`${config.endpoint}${queries}`);

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
