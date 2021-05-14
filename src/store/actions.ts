import types from './types';
import { IGetCasesPayload, IGlobalPayload, IAction } from './interfaces';

export const getCasesAction = (
  payload: IGetCasesPayload
): IAction<IGlobalPayload> => ({
  type: types.GET_CASES,
  payload,
});

export const setLoadingCasesAction = (bool: boolean): IAction<boolean> => ({
  type: types.SET_LOADING_CASES,
  payload: bool,
});

export const setLoadingGlobalAction = (bool: boolean): IAction<boolean> => ({
  type: types.SET_LOADING_GLOBAL,
  payload: bool,
});

export const setCountriesAction = (countries: string[]): IAction<string[]> => ({
  type: types.SET_COUNTRIES,
  payload: countries,
});

export const setSelectedCountryAction = (country: string): IAction<string> => ({
  type: types.SET_SELECTED_COUNTRY,
  payload: country,
});

export const setGlobalsAction = (
  global: IGlobalPayload
): IAction<IGlobalPayload> => ({
  type: types.SET_GLOBALS,
  payload: global,
});
