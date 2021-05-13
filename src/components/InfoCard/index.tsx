import React from 'react';
import Styles from './styles';
import { validateString } from 'utils';

interface IProps {
  title: string;
}

const InfoCard: React.FC<IProps> = ({ title, children, ...props }) => {
  if (!validateString(title)) return null;

  return (
    <Styles.Wrapper {...props}>
      <Styles.Title>{title}</Styles.Title>
      {children}
    </Styles.Wrapper>
  );
};

export default InfoCard;
