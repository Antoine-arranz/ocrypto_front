import React from 'react';
import { Formiz, useForm } from '@formiz/core';
import { isEmail } from '@formiz/validations';

import Button from '../../components/Button';
import Wrapper from '../../components/Wrapper';
import Spacer from '../../components/Spacer';
import FormizSimpleInput from '../../components/Formiz';
import { path } from '../../routes/user';

const ForgottenPassword: React.FC<any> = ({
  handleForgottenPassword,
  history,
}) => {
  const forgottenPasswordForm = useForm();

  const submit = async (data: { name: string }) => {
    handleForgottenPassword(data);
    history.push(path.login);
  };

  return (
    <Wrapper
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      maxWidth='700px'
      margin='30px'
    >
      <Spacer height='10px' />
      <Formiz connect={forgottenPasswordForm} onValidSubmit={submit}>
        <form onSubmit={forgottenPasswordForm.submit} noValidate>
          <FormizSimpleInput
            type='email'
            name='email'
            label='Email'
            placeholder='test@test.com'
            required='Email is required'
            validations={[
              {
                rule: isEmail(),
                message: 'This is not a valid email',
              },
            ]}
          />
          <Spacer height='10px' />
          <Button type='submit' content='Submit' />
        </form>
      </Formiz>
      <Spacer height='10px' />
    </Wrapper>
  );
};

export default ForgottenPassword;
