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

export interface IActions {
  type: string;
}
export interface IGetCasesAction extends IActions {
  payload: IGetCasesPayload;
}

export interface ISetLoadingCasesAction extends IActions {
  payload: boolean;
}

export type Actions = IGetCasesAction | ISetLoadingCasesAction;

export interface ILoading {
  cases: boolean;
  history: boolean;
  vaccines: boolean;
}

export interface IState {
  cases: Record<string, unknown> | IGetCasesPayload;
  loading: ILoading;
}
