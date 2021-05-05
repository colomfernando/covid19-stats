import React, { useState, useEffect } from 'react';
import InputSearch from 'components/InputSearch';
import { getCases } from 'api';
import Styles from './styles';

const Search = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { target } = event;
    const { value } = target;
    setInputValue(value);
  };

  useEffect(() => {
    getCases({ country: 'France' }).then(console.log);
  }, []);

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
