import styled from 'styled-components';
import palette, { hexToRgb } from 'theme/palette';

type WrapperProps = {
  color: string;
};

const setTypeColor = (color: string): string => {
  switch (color) {
    case 'primary':
      return palette.primary.main;

    case 'secondary':
      return palette.secondary.main;

    default:
      return palette.primary.main;
  }
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column nowrap;
  margin: 20px 0;
`;

const WrapperText = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const WrapperProgress = styled.div<WrapperProps>`
  position: relative;
  display: flex;
  height: 16px;
  border-radius: 3px;
  align-items: center;
  background-color: rgba(${hexToRgb(palette.grey[400])}, 0.5);
`;

type ProgressProps = {
  percent: number;
  color: string;
};
const Progress = styled.div<ProgressProps>`
  position: absolute;
  width: ${({ percent }) => `${percent}%`};
  border-radius: inherit;
  background-color: ${({ color }) => setTypeColor(color)};
  top: 0;
  left: 0;
  bottom: 0;
`;

const BaseText = styled.p`
  font-size: 12px;
  color: ${palette.common.black};
`;

const Title = styled(BaseText)`
  font-weight: 500;
  &::first-letter {
    text-transform: capitalize;
  }
`;

const Text = styled(BaseText)`
  margin-left: 3px;
`;

Wrapper.displayName = 'Bar';

export default { Wrapper, WrapperText, WrapperProgress, Progress, Title, Text };
