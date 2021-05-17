import React, { useState, useEffect, useCallback } from 'react';
import { getData } from 'api';
import useStore from 'store';
import { debounce } from 'utils';
import { IGetCasesPayload } from 'store/interfaces';
import {
  setCasesAction,
  setLoadingCasesAction,
  setSelectedCountryAction,
} from 'store/actions';
import Styles from './styles';

interface IOption {
  value: string;
  label: string;
}
interface IProps {
  options: IOption[];
}

const Select: React.FC<IProps> = ({ options, ...props }) => {
  const [selectValue, setSelectValue] = useState<IOption>({
    label: 'Select Country',
    value: '',
  });
  const [, dispatch] = useStore();

  const handleOnChange = (option: IOption): void => setSelectValue(option);

  const handleGetCases = async (value: string) => {
    if (!value) return;
    dispatch(setLoadingCasesAction(true));
    const handleApi = await getData({ type: 'vaccines', country: value });
    console.log('handleApi :>> ', handleApi);
    const responseCases = await getData({ type: 'cases', country: value });

    if ('message' in responseCases) {
      dispatch(setLoadingCasesAction(false));
      return dispatch(setCasesAction({} as IGetCasesPayload));
    }

    dispatch(setCasesAction(responseCases as IGetCasesPayload));
    dispatch(setSelectedCountryAction(value));
    dispatch(setLoadingCasesAction(false));
  };

  const debounceGetCases: (value: string) => void = useCallback(
    debounce((value) => handleGetCases(value), 500),
    []
  );

  useEffect(() => {
    if (!selectValue) return;
    const { value } = selectValue;
    if (!value) return;
    debounceGetCases(value);
  }, [selectValue]);

  return (
    <Styles.Select
      options={options}
      onChange={handleOnChange}
      value={selectValue}
      {...props}
      classNamePrefix="select"
    />
  );
};

export default Select;
