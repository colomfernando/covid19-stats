import styled from 'styled-components';
import palette from 'theme/palette';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 250px;
  max-width: 300px;
  flex-flow: column nowrap;
  border-radius: 10px;
  padding: 20px;
  background: #fff;
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
`;

const Title = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: ${palette.common.black};
  text-align: center;
  margin-bottom: 10px;
`;

Wrapper.displayName = 'InfoCard';
export default { Wrapper, Title };
