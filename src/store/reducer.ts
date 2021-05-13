import types from './types';
import { IState, Actions } from './interfaces';

const reducer = (state: IState, action: Actions): IState => {
  switch (action.type) {
    case types.GET_CASES:
      return { ...state, cases: action.payload } as IState;

    case types.SET_LOADING_CASES:
      return {
        ...state,
        ...{ loading: { ...state.loading, cases: action.payload } },
      } as IState;

    case types.SET_COUNTRIES:
      return { ...state, countries: action.payload } as IState;
    default:
      return state;
  }
};

export default reducer;
