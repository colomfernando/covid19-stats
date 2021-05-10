import React from 'react';
import Styles from './styles';
import useStore from 'store';
import { validateString } from 'utils';

interface IProps {
  title: string;
}

const InfoCard: React.FC<IProps> = ({ title, children, ...props }) => {
  if (!validateString(title)) return null;
  const state = useStore();
  console.log('state :>> ', state);
  return (
    <Styles.Wrapper {...props}>
      <Styles.Title>{title}</Styles.Title>
      <Styles.Line />
      {children}
    </Styles.Wrapper>
  );
};

export default InfoCard;
