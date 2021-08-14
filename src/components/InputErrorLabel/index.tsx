import React from 'react';

import { InputError } from './inputErrorLabelStyled';

const InputErrorLabel = ({ message }: InputErrorLabelProps) => {
  return <InputError>{message}</InputError>;
};

interface InputErrorLabelProps {
  message: string | boolean;
}

export default InputErrorLabel;
