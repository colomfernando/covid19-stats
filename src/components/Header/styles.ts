import styled from 'styled-components';

const Wrapper = styled.header`
  display: flex;
  width: 100%;
  max-width: 1280px;
  margin: 10px auto;
  align-items: center;
  padding: 20px;
`;

Wrapper.displayName = 'Header';

export default { Wrapper };
