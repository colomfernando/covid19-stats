import { validateObj } from 'utils';

interface IQueryParam {
  country?: string;
}

export const getQueries = (params: IQueryParam): string => {
  if (!validateObj(params)) return '';
  return 'test';
};
