import React, { useEffect } from 'react';
import useStore from 'store';
import { setCountriesAction, setGlobalsAction } from 'store/actions';
import Select from 'components/Select';
import { getInitialData } from 'api';
import Styles from './styles';

const Header: React.FC = () => {
  const [state, dispatch] = useStore();
  const { countries } = state;

  const setCountries = async (): Promise<void> => {
    const initialData = await getInitialData();

    if ('message' in initialData) return;
    const { global, countries } = initialData;
    dispatch(setGlobalsAction(global));
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
      {!!(countries && countries.length) && <Select options={optionsSelect} />}
    </Styles.Wrapper>
  );
};

export default Header;
