import React, { useEffect } from 'react';
import useStore from 'store';
import { ICasesPayload, IVaccinesPayload } from 'store/interfaces';
import {
  setCountriesAction,
  setLoadingGlobalAction,
  setSelectedCountryAction,
  setVaccinesAction,
  setCasesAction,
} from 'store/actions';
import Select from 'components/Select';
import { getInitialData, getApiData } from 'api';
import Logo from 'components/Logo';
import Styles from './styles';

const Header: React.FC = () => {
  const [state, dispatch] = useStore();
  const { countries } = state;

  const setCountries = async (): Promise<void> => {
    dispatch(setLoadingGlobalAction(true));
    const initialData = await getInitialData();
    const globalData = await getApiData({ country: 'Global' });

    const { countries } = initialData;
    const { cases, vaccines } = globalData;

    dispatch(setLoadingGlobalAction(false));
    dispatch(setSelectedCountryAction('Global'));
    dispatch(setCasesAction(cases as ICasesPayload));
    dispatch(setVaccinesAction(vaccines as IVaccinesPayload));
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
      <Logo />
      {!!(countries && countries.length) && <Select options={optionsSelect} />}
    </Styles.Wrapper>
  );
};

export default Header;
