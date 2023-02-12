import React, { useState } from "react";
import { useField } from "@formiz/core";

import SimpleInput from "./SimpleInput";

const FormizSimpleInput = (props: any) => {
  const [isTouched, setIsTouched] = useState(false);
  const { errorMessage, isValid, isSubmitted, setValue, value } =
    useField(props);
  const { name, type, label, placeholder, required, disabled, autoFocus } =
    props;
  const showError = !isValid && (isTouched || isSubmitted);

  return (
    <SimpleInput
      autoFocus={autoFocus}
      name={name}
      type={type}
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={() => setIsTouched(true)}
      required={required}
      disabled={disabled}
      error={showError && errorMessage}
    />
  );
};

export default FormizSimpleInput;
