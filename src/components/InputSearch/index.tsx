import React from 'react';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  type?: string;
  value: string;
  placeholder?: string | null;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

const InputSearch = ({
  type = 'text',
  value,
  placeholder,
  onChange,
  onKeyPress,
}: Props): JSX.Element => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  );
};

export default InputSearch;
