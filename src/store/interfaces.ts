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
  updated?: string;
}

export interface IGetCasesAction {
  type: string;
  payload: Record<string, unknown> | IGetCasesPayload;
}

export interface IState {
  cases: Record<string, unknown> | IGetCasesPayload;
}
