import React, { useState, useEffect, useCallback } from 'react';
import InputSearch from 'components/InputSearch';
import { getCases } from 'api';
import useStore from 'store';
import { IGetCasesPayload } from 'store/interfaces';
import { debounce } from 'utils';
import { getCasesAction, setLoadingCasesAction } from 'store/actions';
import Styles from './styles';

const Search = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>('');
  const [, dispatch] = useStore();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { target } = event;
    const { value } = target;
    setInputValue(value);
  };

  const handleGetCases = async (value: string) => {
    if (!value || value.length < 3) return;
    dispatch(setLoadingCasesAction(true));
    const parseCountry = `${value[0].toUpperCase()}${value.slice(1)}`;
    const response = await getCases({ country: parseCountry });

    if ('message' in response) {
      dispatch(setLoadingCasesAction(false));
      return dispatch(getCasesAction({} as IGetCasesPayload));
    }
    dispatch(getCasesAction(response));
    dispatch(setLoadingCasesAction(false));
  };

  const debounceGetCases: (value: string) => void = useCallback(
    debounce((value) => handleGetCases(value), 500),
    []
  );

  useEffect(() => {
    if (!inputValue || inputValue.length < 3) return;
    debounceGetCases(inputValue);
  }, [inputValue]);

  return (
    <Styles.Wrapper>
      <InputSearch
        placeholder="Country"
        onChange={handleOnChange}
        value={inputValue}
      />
    </Styles.Wrapper>
  );
};

export default Search;
