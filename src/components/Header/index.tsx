import React from 'react';
import Styles from './styles';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const Header: React.FC<Props> = ({ children }) => {
  return (
    <Styles.Wrapper>
      <Styles.Title>Covid 19 Stats</Styles.Title>
      {children}
    </Styles.Wrapper>
  );
};

export default Header;
