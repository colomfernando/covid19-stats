import React, { useEffect } from 'react';
import useStore from 'store';
import { validateArr } from 'utils';
import { setCountriesAction } from 'store/actions';
import Select from 'components/Select';
import { getCountries } from 'api';
import Styles from './styles';

const Header: React.FC = () => {
  const [state, dispatch] = useStore();
  const { countries } = state;

  const setCountries = async (): Promise<void> => {
    const countries = await getCountries();
    if ('message' in countries || !validateArr(countries)) return;

    return dispatch(setCountriesAction(countries));
  };
  const optionsSelect =
    countries && countries.length
      ? countries.map((option) => ({ value: option, label: option }))
      : [];

  useEffect(() => {
    setCountries();
  }, []);
  return (
    <Styles.Wrapper>
      <Styles.Title>Covid 19 Stats</Styles.Title>
      {countries && countries.length && <Select options={optionsSelect} />}
    </Styles.Wrapper>
  );
};

export default Header;
