import axios from 'axios';
import { getQueries, QueryParam } from 'api/utils';
import { validateObj } from 'utils';
import {
  IGlobalPayload,
  ICasesPayload,
  IVaccinesPayload,
} from 'store/interfaces';
import localStorage from 'browser-localstorage-expire';

const localCache = localStorage();
const BASE_URL = 'https://covid-api.mmediagroup.fr/v1/';

export interface IInitialData {
  global: IGlobalPayload;
  countries: string[];
}
export interface IError {
  message: string;
}

export interface IResponse {
  cases: ICasesPayload | Record<string, never>;
  vaccines: IVaccinesPayload | Record<string, never>;
}
export interface IErrorInitialData extends IError {
  countries: [];
  Global: Record<string, never>;
}

export interface IErrorData extends IError {
  cases: Record<string, never>;
  vaccines: Record<string, never>;
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

    const { cases: casesConfig } = configApi;

    const { data } = await axios(`${casesConfig.endpoint}`);
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

export const getApiData = async (
  params: QueryParam
): Promise<IResponse | IErrorData> => {
  try {
    if (!validateObj(params) || !Object.keys(params).length)
      throw new Error('params arg is invalid or null');

    const { cases: casesConfig, vaccines: vaccinesConfig } = configApi;

    const queries = params && validateObj(params) ? getQueries(params) : '';

    const { data: casesData } = await axios(
      `${casesConfig.endpoint}${queries}`
    );

    const { data: vaccinesData } = await axios(
      `${vaccinesConfig.endpoint}${queries}`
    );

    if (
      !validateObj(casesData) &&
      !validateObj(vaccinesData) &&
      !Object.keys(casesData).length &&
      !Object.keys(vaccinesData).length
    )
      throw new Error('There is no data to show');

    const { All: casesResponse = {} } = casesData;
    const { All: vaccinesResponse = {} } = vaccinesData;

    const responses = {
      cases:
        !validateObj(casesResponse) || !Object.keys(casesResponse).length
          ? {}
          : casesResponse,
      vaccines:
        !validateObj(vaccinesResponse) || !Object.keys(vaccinesResponse).length
          ? {}
          : vaccinesResponse,
    };

    return responses;
  } catch (reason) {
    return { cases: {}, vaccines: {}, message: reason.message };
  }
};
