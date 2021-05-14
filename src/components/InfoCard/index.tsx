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
      <Styles.WrapperTitle>
        <Styles.Bullet />
        <Styles.Title>{title}</Styles.Title>
      </Styles.WrapperTitle>
      <Styles.WrapperChilds>{children}</Styles.WrapperChilds>
    </Styles.Wrapper>
  );
};

export default InfoCard;
