import React, { useState, useEffect, useCallback } from 'react';
import InputSearch from 'components/InputSearch';
import Select from 'components/Select';
import { getCases } from 'api';
import { debounce } from 'utils';
import Styles from './styles';

const selectOptions = [
  { label: 'Cases', value: 'cases' },
  { label: 'History', value: 'history' },
  { label: 'Vaccines', value: 'vaccines' },
];

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
      <Select
        options={selectOptions}
        defaultValue={selectOptions[0]}
        onChange={({ value }): void => console.log(value)}
      />
    </Styles.Wrapper>
  );
};

export default Search;
