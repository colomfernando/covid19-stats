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
export interface IAction<T> {
  type: string;
  payload: T;
}

export type Actions =
  | IAction<IGetCasesPayload>
  | IAction<boolean>
  | IAction<string[]>
  | IAction<string>
  | IAction<IGlobalPayload>;

export interface ILoading {
  cases: boolean;
  global: boolean;
  history: boolean;
  vaccines: boolean;
}

export interface IState {
  selectedCountry: string;
  cases: Record<string, unknown> | IGetCasesPayload;
  global: Record<string, unknown> | IGlobalPayload;
  loading: ILoading;
  countries: string[];
}
