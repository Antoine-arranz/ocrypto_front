import React from 'react';
import { Formiz, useForm } from '@formiz/core';
import Button from '../../components/Button';
import Wrapper from '../../components/Wrapper';
import FormizSimpleInput from '../../components/Formiz';
import Spacer from '../../components/Spacer';
import TextCustom from '../../components/TextCustom';
import { path } from '../../routes/user';
import { useEffect } from 'react';
import Segment from '../../components/Segment';

const UpdatePassword: React.FC<any> = ({ match, history, resetPassword }) => {
  const forgottenPasswordForm = useForm();

  const save = (values: any) => {
    resetPassword(match.params.token, values.password);
    history.push(path.login);
  };

  return (
    <Wrapper
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
    >
      <Segment padding='3rem 5rem 1rem 5rem'>
        <TextCustom fontWeight='bold' fontSize='1.5em'>
          Choose a new password:
        </TextCustom>
        <Spacer height='20px' />
        <Formiz connect={forgottenPasswordForm} onValidSubmit={save}>
          <form onSubmit={forgottenPasswordForm.submit}>
            <FormizSimpleInput
              type='password'
              name='password'
              label='Password'
              placeholder='Password'
              required='Password is required'
              /**validations={[
                {
                  rule: isPattern(passwordRegex),
                  message:
                    'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
                },
              ]}**/
            />
            <Spacer height='10px' />
            <FormizSimpleInput
              type='password'
              name='confirmPassword'
              label='Confirm password'
              placeholder='Password'
              required='Password is required'
              /**validations={[
                {
                  rule: (value) =>
                    forgottenPasswordForm.values.password === value,
                  deps: [forgottenPasswordForm.values.password],
                  message: 'Passwords do not match',
                },
              ]}**/
            />
            <Spacer height='20px' />
            <Button type='submit' content='submit' />
          </form>
        </Formiz>
      </Segment>
    </Wrapper>
  );
};

export default UpdatePassword;
