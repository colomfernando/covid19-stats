import types from './types';
import {
  IGetCasesAction,
  IGetCasesPayload,
  ISetLoadingCasesAction,
  ISetCountries,
} from './interfaces';

export const getCasesAction = (payload: IGetCasesPayload): IGetCasesAction => ({
  type: types.GET_CASES,
  payload,
});

export const setLoadingCasesAction = (
  bool: boolean
): ISetLoadingCasesAction => ({
  type: types.SET_LOADING_CASES,
  payload: bool,
});

export const setCountriesAction = (countries: string[]): ISetCountries => ({
  type: types.SET_COUNTRIES,
  payload: countries,
});
