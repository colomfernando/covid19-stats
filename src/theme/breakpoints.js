/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { css } from 'styled-components';

const breakpointsValues: IBreakpoints = {
  sm: 600,
  md: 960,
  lg: 1280,
};

const getMin = (key) =>
  `@media screen and (max-width: ${breakpointsValues[key] - 1}px)`;

const breakpoints = {
  sm: (...args) => css`
    ${getMin('sm')} {
      ${css(...args)}
    }
  `,
  md: (...args) => css`
    ${getMin('md')} {
      ${css(...args)}
    }
  `,
  lg: (...args) => css`
    ${getMin('lg')} {
      ${css(...args)}
    }
  `,
};

export default breakpoints;
