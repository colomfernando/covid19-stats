import styled from 'styled-components';
import palette from 'theme/palette';

const Wrapper = styled.header`
  display: flex;
  width: 100%;
  max-width: 1280px;
  margin: 10px auto;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background: ${palette.common.white};
  border-radius: 10px;
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
`;

Wrapper.displayName = 'Header';

export default { Wrapper };
