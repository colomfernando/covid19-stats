import React, { useEffect } from 'react';
import useStore from 'store';
import { validateArr } from 'utils';
import { setCountriesAction } from 'store/actions';
import { getCountries } from 'api';
import Styles from './styles';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const Header: React.FC<Props> = ({ children }) => {
  const [, dispatch] = useStore();

  const setCountries = async (): Promise<void> => {
    const countries = await getCountries();
    if ('message' in countries || !validateArr(countries)) return;

    return dispatch(setCountriesAction(countries));
  };

  useEffect(() => {
    setCountries();
  }, []);
  return (
    <Styles.Wrapper>
      <Styles.Title>Covid 19 Stats</Styles.Title>
      {children}
    </Styles.Wrapper>
  );
};

export default Header;
