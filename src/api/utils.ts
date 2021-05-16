import { validateObj, validateString } from 'utils';

export type QueryParam = {
  type: string;
  country?: string;
  ab?: string;
  status?: string;
};

export const getQueries = (params: QueryParam): string => {
  if (!validateObj(params)) return '';
  const { country, ab, status } = params;
  const queryArr = [
    validateString(country) ? `country=${country}` : '',
    validateString(ab) ? `ab=${ab}` : '',
    validateString(status) ? `status=${status}` : '',
  ].filter(Boolean);

  if (queryArr.length) return `?${queryArr.join('&')}`;
  return '';
};
