import styled from 'styled-components';
import palette from 'theme/palette';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Svg = styled.svg`
  width: 45px;
  height: auto;
  fill: ${palette.secondary.main};
`;

const Title = styled.h2`
  margin-left: 10px;
`;

Wrapper.displayName = 'Logo';
export default { Wrapper, Svg, Title };
