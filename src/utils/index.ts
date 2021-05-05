export const validateObj = (obj = {}): boolean =>
  obj && obj.constructor === Object;
