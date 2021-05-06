import React, { useState, useEffect, useCallback } from 'react';
import InputSearch from 'components/InputSearch';
import { getCases } from 'api';
import { debounce } from 'utils';
import Styles from './styles';

const Search = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { target } = event;
    const { value } = target;
    setInputValue(value);
  };
  const handleGetCases = (value: string): void => {
    if (!value || value.length < 3) return;
    const parseCountry = `${value[0].toUpperCase()}${value.slice(1)}`;
    getCases({ country: parseCountry }).then(console.log);
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
