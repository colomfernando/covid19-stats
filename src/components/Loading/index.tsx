import React from 'react';
import Styles from './styles';

export interface Props {
  size?: number | null;
  color?: 'primary' | 'secondary';
  loading?: boolean;
}
const Loading: React.FC<Props | null> = ({
  size = 30,
  color = 'primary',
  loading,
  ...props
}) => {
  return loading ? (
    <Styles.Wrapper size={size} color={color} {...props} />
  ) : null;
};

export default Loading;
