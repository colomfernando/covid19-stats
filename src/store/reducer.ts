import types from './types';
import { IState, IGetCasesAction } from './interfaces';

const reducer = (state: IState, action: IGetCasesAction): IState => {
  switch (action.type) {
    case types.GET_CASES:
      return { ...state, ...{ cases: action.payload } };

    default:
      return state;
  }
};

export default reducer;
