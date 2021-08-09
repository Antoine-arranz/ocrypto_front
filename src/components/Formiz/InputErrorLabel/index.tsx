import React from "react";

import { InputError } from "./InputErrorLabelStyled";

const InputErrorLabel = ({ message }: InputErrorLabelProps) => {
  return <InputError>{message}</InputError>;
};

interface InputErrorLabelProps {
  message: string;
}

export default InputErrorLabel;
