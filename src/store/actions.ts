import types from './types';
import {
  IGetCasesAction,
  IGetCasesPayload,
  ISetLoadingCasesAction,
} from './interfaces';

export const getCasesAction = (payload: IGetCasesPayload): IGetCasesAction => ({
  type: types.GET_CASES,
  payload,
});

export const setLoadingCasesAction = (
  bool: boolean
): ISetLoadingCasesAction => ({
  type: types.SET_LOADING_CASES,
  payload: bool,
});
