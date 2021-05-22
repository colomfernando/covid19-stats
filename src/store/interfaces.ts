export interface ICasesPayload {
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

export interface IVaccinesPayload {
  abbreviation: string;
  administered: number;
  capital_city: string;
  continent: string;
  country: string;
  elevation_in_meters: number;
  iso: number;
  life_expectancy: string;
  location: number;
  people_partially_vaccinated: number;
  people_vaccinated: number;
  population: number;
  sq_km_area: number;
  updated: number;
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
  | IAction<ICasesPayload>
  | IAction<IVaccinesPayload>
  | IAction<boolean>
  | IAction<string[]>
  | IAction<string>
  | IAction<IGlobalPayload>;

export interface ILoading {
  global: boolean;
  data: boolean;
}

export interface IState {
  selectedCountry: string;
  cases: Record<string, unknown> | ICasesPayload;
  vaccines: Record<string, unknown> | IVaccinesPayload;
  global: Record<string, unknown> | IGlobalPayload;
  loading: ILoading;
  countries: string[];
}
