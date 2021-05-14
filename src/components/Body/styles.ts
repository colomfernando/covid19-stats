import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  margin: 30px auto;
`;

Wrapper.displayName = 'Body';

export default { Wrapper };
