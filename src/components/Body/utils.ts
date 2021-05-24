import { validateString, validateNumber, validateObj } from 'utils';
import {
  IGlobalPayload,
  ICasesPayload,
  IVaccinesPayload,
} from 'store/interfaces';

type indexKey = keyof ICasesPayload | keyof IVaccinesPayload;

interface ISchema {
  value: indexKey;
  total: indexKey;
  type: string;
  minColor: string;
  maxColor: string;
  limit: number;
}
interface ISchemas {
  [key: string]: ISchema;
}

const schemas: ISchemas = {
  confirmed: {
    value: 'confirmed',
    total: 'population',
    type: 'cases',
    minColor: 'secondary',
    maxColor: 'secondary',
    limit: 10,
  },
  recovered: {
    value: 'recovered',
    total: 'confirmed',
    type: 'recovered',
    minColor: 'secondary',
    maxColor: 'primary',
    limit: 50,
  },
  deaths: {
    value: 'deaths',
    total: 'population',
    type: 'deaths',
    minColor: 'secondary',
    maxColor: 'primary',
    limit: 10,
  },
  administered: {
    value: 'administered',
    total: 'population',
    type: 'total vaccines administered',
    minColor: 'secondary',
    maxColor: 'primary',
    limit: 50,
  },
  people_partially_vaccinated: {
    value: 'people_partially_vaccinated',
    total: 'population',
    type: 'partially vaccines administered',
    minColor: 'secondary',
    maxColor: 'primary',
    limit: 50,
  },
  people_vaccinated: {
    value: 'people_vaccinated',
    total: 'population',
    type: 'people vaccines',
    minColor: 'secondary',
    maxColor: 'primary',
    limit: 50,
  },
};

export const getPercent = (value: number, total: number): number =>
  (100 / total) * value;

export interface IParseItem {
  value: number;
  total: number;
  color: string;
  type: string;
}

export const parseItem = (
  value: number,
  total: number,
  type: string,
  minColor: string,
  maxColor: string,
  limitPercent: number
): IParseItem | Record<string, unknown> => {
  if (!type) return {};

  if (
    !validateNumber(value) ||
    !validateNumber(total) ||
    !validateNumber(limitPercent)
  )
    return {};
  if (value < 0 || total < 0) return {};

  if (
    !validateString(type) ||
    !validateString(minColor) ||
    !validateString(maxColor)
  )
    return {};

  const percent = getPercent(value, total);
  const color = percent > limitPercent ? maxColor : minColor;

  return {
    value,
    total,
    color,
    type,
  };
};

export const parseData = (
  data:
    | ICasesPayload
    | IVaccinesPayload
    | IGlobalPayload
    | Record<string, unknown>
): IParseItem[] | [] => {
  if (
    !validateObj(data as Record<string, unknown>) ||
    !Object.keys(data).length
  )
    return [];

  const dataKeys = Object.keys(data).filter((key) => key in schemas);
  if (!dataKeys.length) return [];

  const newData = dataKeys
    .map((key: string) => {
      const schema = schemas[key];
      if (!Object.keys(schema).length) return false;

      const value = data[schema.value];
      const total = data[schema.total];

      return parseItem(
        value,
        total,
        schema.type,
        schema.minColor,
        schema.maxColor,
        schema.limit
      );
    })
    .filter(Boolean);

  return newData as IParseItem[];
};
