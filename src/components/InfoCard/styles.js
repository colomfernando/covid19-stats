import styled from 'styled-components';
import palette from 'theme/palette';

const Wrapper = styled.div`
  display: flex;
  max-width: 300px;
  flex-flow: column nowrap;
  border-radius: 20px;
  padding: 20px;
  background: #fff;
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${palette.common.black};
  text-align: center;
  margin-bottom: 10px;
`;

const Line = styled.div`
  width: calc(100% + 40px);
  margin-left: -20px;
  height: 1px;
  background-color: ${palette.grey[300]};
  margin-bottom: 15px;
`;

Wrapper.displayName = 'InfoCard';
export default { Wrapper, Title, Line };
