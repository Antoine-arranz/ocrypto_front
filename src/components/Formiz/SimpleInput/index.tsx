import React from "react";
import Wrapper from "../../Wrapper";

import InputErrorLabel from "../InputErrorLabel";
import { InputStyled, InputWrapper } from "./SimpleInputStyles";

const SimpleInput = ({
  label,
  type,
  name,
  placeholder,
  error,
  disabled,
  required,
  value,
  autoFocus,
  onChange,
  onBlur,
}: SimpleInputProps) => {
  return (
    <InputWrapper>
      {label && (
        <label htmlFor={name}>
          {label}
          {required && " *"}
        </label>
      )}

      <InputStyled
        autoFocus={autoFocus}
        disabled={disabled}
        type={type ?? "text"}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value ?? ""}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
      />

      {error && <InputErrorLabel message={error} />}
    </InputWrapper>
  );
};

export interface SimpleInputProps {
  name: string;
  value?: string;
  error?: string | false;
  disabled?: true;
  placeholder?: string;
  type?: string;
  label?: string;
  required?: string;
  autoFocus?: true;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
}

export default SimpleInput;
