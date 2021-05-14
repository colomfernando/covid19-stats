import React from 'react';
import { validateNumber } from 'utils';
import Styles from './styles';

export interface IBarProps {
  total: number | undefined;
  value: number | undefined;
  color: string;
  type: string;
}

const Bar: React.FC<IBarProps> = ({ type, total, value, color, ...props }) => {
  if (total === undefined || value === undefined) return null;

  if (!validateNumber(total) || !validateNumber(value)) return null;
  const percent = (100 / total) * value;
  return (
    <Styles.Wrapper {...props}>
      <Styles.WrapperText>
        <Styles.Title>{`${type}:`}</Styles.Title>
        <Styles.Text>{`${value.toLocaleString()} / ${total.toLocaleString()}`}</Styles.Text>
      </Styles.WrapperText>
      <Styles.WrapperProgress color={color}>
        <Styles.Progress
          color={color}
          percent={percent > 100 ? 100 : percent}
        />
      </Styles.WrapperProgress>
    </Styles.Wrapper>
  );
};

export default Bar;
