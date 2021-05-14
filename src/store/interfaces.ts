export interface IGetCasesPayload {
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

export interface IGlobalPayload {
  population: number;
  confirmed: number;
  recovered: number;
  deaths: number;
}

export interface IActions {
  type: string;
}
export interface IGetCasesAction extends IActions {
  payload: IGetCasesPayload;
}

export interface ISetLoadingAction extends IActions {
  payload: boolean;
}

export interface ISetCountries extends IActions {
  payload: string[];
}

export interface ISetGlobalsAction extends IActions {
  payload: IGlobalPayload;
}

export type Actions =
  | IGetCasesAction
  | ISetLoadingAction
  | ISetCountries
  | ISetGlobalsAction;

export interface ILoading {
  cases: boolean;
  global: boolean;
  history: boolean;
  vaccines: boolean;
}

export interface IState {
  cases: Record<string, unknown> | IGetCasesPayload;
  global: Record<string, unknown> | IGlobalPayload;
  loading: ILoading;
  countries: string[];
}
