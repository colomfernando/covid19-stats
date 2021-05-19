import styled from 'styled-components';
import palette from 'theme/palette';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1280px;
  flex-flow: column nowrap;
  border-radius: 10px;
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: ${palette.common.black};
`;

const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;

const TitleSkeleton = styled.div`
  background-color: ${palette.grey[300]};
  width: 100px;
  height: 20px;
`;

const WrapperChilds = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 40px;
  min-height: 120px;
  border-radius: 10px;
  padding: 30px;
  background: #fff;
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
`;

const Bullet = styled.span`
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 6px;
  margin-right: 15px;
  background-color: ${palette.primary.main};
`;

Wrapper.displayName = 'InfoCard';
export default {
  Wrapper,
  Title,
  WrapperChilds,
  Bullet,
  WrapperTitle,
  TitleSkeleton,
};