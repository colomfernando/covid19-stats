const palette = {
  primary: {
    light: '#7afad3',
    main: '#4ce0b3',
    dark: '#36ad89',
    contrastText: '#fff',
  },
  secondary: {
    light: '#ffb19e',
    main: '#ff8e72',
    dark: '#db775e',
    contrastText: '#fff',
  },
  error: {
    main: '#ff3333',
  },
  success: {
    main: '#4cc355',
  },
  common: {
    black: '#000',
    white: '#fff',
  },
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    700: '#616161',
    600: '#757575',
    800: '#424242',
    900: '#212121',
  },
};

export const hexToRgb = (hex: string): string =>
  hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => '#' + r + r + g + g + b + b
    )
    .substring(1)
    .match(/.{2}/g)
    .map((x) => parseInt(x, 16))
    .join(',');

export default palette;
