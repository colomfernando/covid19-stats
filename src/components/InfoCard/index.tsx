import React from 'react';
import Styles from './styles';
import { validateString } from 'utils';

interface IInfoCardProps {
  title: string;
  loading: boolean;
}

const InfoCard: React.FC<IInfoCardProps> = ({
  title,
  loading,
  children,
  ...props
}) => {
  if (!validateString(title) && !loading) return null;

  return (
    <Styles.Wrapper {...props}>
      <Styles.WrapperTitle>
        <Styles.Bullet />
        <Styles.Title loading={loading}>{title}</Styles.Title>
      </Styles.WrapperTitle>
      <Styles.WrapperChilds>{children}</Styles.WrapperChilds>
    </Styles.Wrapper>
  );
};

export default InfoCard;
