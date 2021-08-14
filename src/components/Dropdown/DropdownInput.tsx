import React, { FunctionComponent } from 'react';

import InputErrorLabel from '../InputErrorLabel';
import {
  DropdownCustom as Dropdown,
  InputWrapper,
} from './DropdownInputStyled';

import { DropdownProps } from 'semantic-ui-react';

type DropdownInputProps = {
  name: string;
  value?: string;
  error?: string | boolean;
  disabled?: true;
  placeholder?: string;
  label?: string;
  required?: string;
  loading?: boolean;
  multiple?: boolean;
  options: string;
  clearable?: boolean;
  fluid?: boolean;
  search?: boolean;
  selection?: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    data: DropdownProps
  ) => void;
  onBlur?: () => void;
};

const DropdownInput: FunctionComponent<DropdownInputProps> = ({
  label,
  name,
  placeholder,
  error,
  disabled,
  required,
  value,
  loading = false,
  multiple = false,
  options,
  clearable = false,
  fluid = false,
  onChange,
  onBlur,
  search,
}) => {
  return (
    <InputWrapper>
      {label && (
        <label htmlFor={name}>
          {label}
          {required && ' *'}
        </label>
      )}
      <Dropdown
        search={search}
        disabled={disabled}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value ?? ''}
        loading={loading}
        multiple={multiple}
        options={options}
        clearable={clearable}
        fluid={fluid}
        selection
        onChange={onChange}
        onBlur={onBlur}
        error={error ? true : false}
      />

      {error && <InputErrorLabel message={error} />}
    </InputWrapper>
  );
};

export default DropdownInput;
