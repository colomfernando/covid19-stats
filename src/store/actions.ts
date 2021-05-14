import types from './types';
import {
  IGetCasesAction,
  IGetCasesPayload,
  ISetLoadingAction,
  ISetCountries,
  ISetGlobalsAction,
  IGlobalPayload,
} from './interfaces';

export const getCasesAction = (payload: IGetCasesPayload): IGetCasesAction => ({
  type: types.GET_CASES,
  payload,
});

export const setLoadingCasesAction = (bool: boolean): ISetLoadingAction => ({
  type: types.SET_LOADING_CASES,
  payload: bool,
});

export const setLoadingGlobalAction = (bool: boolean): ISetLoadingAction => ({
  type: types.SET_LOADING_GLOBAL,
  payload: bool,
});

export const setCountriesAction = (countries: string[]): ISetCountries => ({
  type: types.SET_COUNTRIES,
  payload: countries,
});

export const setGlobalsAction = (
  global: IGlobalPayload
): ISetGlobalsAction => ({
  type: types.SET_GLOBALS,
  payload: global,
});
