import styled, { keyframes } from 'styled-components';
import palette from 'theme/palette';

const rotate = keyframes`
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
`;
interface WrapperProps {
  size: number | null | undefined;
  color: 'primary' | 'secondary';
}
const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => `${size}px}`};
  height: ${({ size }) => `${size}px`};
  border: ${({ size }) => size && `${size / 7}px`} solid
    ${({ color }) => palette[color].main};
  border-right-color: transparent;
  border-radius: 50%;
  animation: ${rotate} 0.75s linear infinite;
`;

export default { Wrapper };
