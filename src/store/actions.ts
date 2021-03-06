import types from './types';
import { ICasesPayload, IVaccinesPayload, IAction } from './interfaces';

export const setCasesAction = (
  payload: ICasesPayload
): IAction<ICasesPayload> => ({
  type: types.SET_CASES,
  payload,
});

export const setVaccinesAction = (
  payload: IVaccinesPayload
): IAction<IVaccinesPayload> => ({
  type: types.SET_VACCINES,
  payload,
});

export const setLoadingDataAction = (bool: boolean): IAction<boolean> => ({
  type: types.SET_LOADING_DATA,
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
