import React from 'react';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  type?: string;
  value: string;
  placeholder: string;
};

const InputSearch: React.FC<Props> = ({
  type = 'text',
  value,
  placeholder,
  onChange,
}) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default InputSearch;
