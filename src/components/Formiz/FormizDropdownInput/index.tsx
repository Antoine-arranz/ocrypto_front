import React, { useState } from 'react';
import { useField } from '@formiz/core';

import DropdownInput from '../../Dropdown/DropdownInput';

const FormizDropdownInput = (props: any) => {
  const [isTouched, setIsTouched] = useState(false);
  const { errorMessage, isValid, isSubmitted, setValue, value } =
    useField(props);
  const { name, label, placeholder, required, disabled } = props;
  const showError = !isValid && (isTouched || isSubmitted);

  return (
    <DropdownInput
      search={props.search}
      options={props.options}
      name={name}
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={(e, { value }) => {
        setValue(value);
      }}
      onBlur={() => setIsTouched(true)}
      required={required}
      disabled={disabled}
      error={showError && errorMessage}
    />
  );
};

export default FormizDropdownInput;
