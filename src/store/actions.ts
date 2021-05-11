import types from './types';
import { IGetCasesAction, IGetCasesPayload } from './interfaces';

export const getCasesAction = (
  payload: Record<string, unknown> | IGetCasesPayload
): IGetCasesAction => ({
  type: types.GET_CASES,
  payload,
});
