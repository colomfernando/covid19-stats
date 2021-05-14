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

interface ITitleProps {
  loading: boolean;
}
const Title = styled.h3<ITitleProps>`
  font-size: 20px;
  font-weight: 500;
  color: ${palette.common.black};
  ${({ loading }) =>
    loading &&
    `
		background-color: ${palette.grey[300]};
		color: transparent;
	`}
`;

const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
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
export default { Wrapper, Title, WrapperChilds, Bullet, WrapperTitle };
