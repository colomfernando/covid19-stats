import styled from 'styled-components';
import palette from 'theme/palette';

const Wrapper = styled.div`
  display: flex;
  max-width: 300px;
  flex-flow: column nowrap;
  border-radius: 20px;
  padding: 20px 40px;
  background: #fff;
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${palette.secondary.main};
  text-align: center;
`;

Wrapper.displayName = 'InfoCard';
export default { Wrapper, Title };
