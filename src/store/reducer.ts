import types from './types';
import { IState, Actions } from './interfaces';

const reducer = (state: IState, action: Actions): IState => {
  switch (action.type) {
    case types.SET_CASES:
      return { ...state, cases: action.payload } as IState;

    case types.SET_VACCINES:
      return { ...state, vaccines: action.payload } as IState;

    case types.SET_LOADING_DATA:
      return {
        ...state,
        ...{ loading: { ...state.loading, data: action.payload } },
      } as IState;

    case types.SET_LOADING_GLOBAL:
      return {
        ...state,
        ...{ loading: { ...state.loading, global: action.payload } },
      } as IState;

    case types.SET_COUNTRIES:
      return { ...state, countries: action.payload } as IState;

    case types.SET_SELECTED_COUNTRY:
      return { ...state, selectedCountry: action.payload } as IState;
    default:
      return state;
  }
};

export default reducer;
