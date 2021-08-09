import { Formiz, useForm } from '@formiz/core';
import { isEmail } from '@formiz/validations';
import React, { useEffect } from 'react';
import Loader from '../../components/Loader';
import Button from '../../components/Button';
import FormizSimpleInput from '../../components/Formiz';
import Wrapper from '../../components/Wrapper';
import { ClickableText } from '../../components/ClickatableText/ClickableTextStyled';
import Spacer from '../../components/Spacer';
import { path } from '../../routes/user';

const Login: React.FC<any> = ({
  handleLogin,
  user,
  history,
  validateUser,
  match,
}) => {
  useEffect(() => {
    if (match.params.token) {
      validateUser(match.params.token);
      history.push(path.validateAccount);
    }
    if (user.isAuthenticated) {
      history.push('/');
    }
  }, [user.isAuthenticated]);

  const loading = user.loading;
  const loginForm = useForm();
  const signIn = async (data: any) => {
    handleLogin(data);
  };
  return (
    <Wrapper width='30%' margin='auto'>
      {loading && <Loader />}
      <Formiz connect={loginForm} onValidSubmit={signIn}>
        <form onSubmit={loginForm.submit} noValidate>
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
          <FormizSimpleInput
            type='password'
            name='password'
            label='Password'
            placeholder='Password'
            required='Password is required'
          />
          <Spacer height='10px' />
          <Button type='submit' content='Submit' />
        </form>
      </Formiz>
      <Spacer height='10px' />
      <ClickableText
        textalign='center'
        onClick={() => {
          history.push('/signIn');
        }}
      >
        Create and account
      </ClickableText>
      <Spacer height='10px' />
      <ClickableText
        textalign='center'
        onClick={() => {
          history.push('/forgotten-password');
        }}
      >
        Forgot your password ?
      </ClickableText>
    </Wrapper>
  );
};
export default Login;
