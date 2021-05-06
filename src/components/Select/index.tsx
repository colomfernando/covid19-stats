import React from 'react';
import Styles from './styles';

export interface IOption {
  value: string;
  label: string;
}
interface IProps {
  options: IOption[];
  defaultValue?: IOption;
  onChange: (value: IOption) => void;
}

const Select: React.FC<IProps> = ({
  options,
  onChange,
  defaultValue,
  ...props
}: IProps) => {
  return (
    <Styles.Select
      classNamePrefix="custom-select"
      onChange={onChange}
      defaultValue={defaultValue}
      options={options}
      {...props}
    />
  );
};

export default Select;
