import styled from 'styled-components';
import palette from 'theme/palette';
import breakpoints from 'theme/breakpoints';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1280px;
  flex-flow: column nowrap;
  border-radius: 10px;
  padding: 20px;
  ${breakpoints.md`
		padding: 10px;
	`}
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: ${palette.common.black};
`;

const Population = styled.span`
  font-size: 14px;
  padding-top: 3px;
  display: flex;
  margin-left: 20px;
  color: ${palette.grey[600]};
`;

const WrapperTitle = styled.div`
  display: flex;
  height: 20px;
  align-items: center;
  margin-bottom: 25px;
`;

const WrapperChilds = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 40px;
  min-height: 178px;
  border-radius: 10px;
  padding: 30px;
  background: #fff;
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
  ${breakpoints.md`
		padding: 15px;
	`}
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
  Population,
  WrapperChilds,
  Bullet,
  WrapperTitle,
};
