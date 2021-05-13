import React from 'react';
import { validateNumber } from 'utils';
import Styles from './styles';

interface IProps {
  total: number | undefined;
  value: number | undefined;
  color: string;
  type: string;
}

const Bar: React.FC<IProps> = ({ type, total, value, color }) => {
  if (!total || !validateNumber(total) || !value || !validateNumber(value))
    return null;
  const percent = (100 / total) * value;
  return (
    <Styles.Wrapper>
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
