import styled from 'styled-components';
import palette from 'theme/palette';

const Wrapper = styled.header`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: ${palette.primary.main};
`;

Wrapper.displayName = 'Header';

export default { Wrapper, Title };
