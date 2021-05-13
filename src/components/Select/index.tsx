import React from 'react';
import Styles from './styles';

interface IOption {
  value: string;
  label: string;
}
interface IProps {
  options: IOption[];
}

const Select: React.FC<IProps> = ({ options, ...props }) => {
  return (
    <Styles.Select options={options} {...props} classNamePrefix="select" />
  );
};

export default Select;
