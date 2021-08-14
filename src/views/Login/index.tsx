import { Formiz, useForm } from '@formiz/core';
import { isEmail } from '@formiz/validations';
import React, { useEffect } from 'react';
import Loader from '../../components/Loader';
import Button from '../../components/Button';
import FormizSimpleInput from '../../components/Formiz';
import Wrapper from '../../components/Wrapper';
import { ClickableText } from '../../components/ClickatableText/ClickableTextStyled';
import Spacer from '../../components/Spacer';
import { UserLoginI } from '../../interface/formSchema/user';
import { LoginPropsI } from '../../interface/user';

const Login: React.FC<LoginPropsI> = ({
  handleLogin,
  user,
  history,
  validateUser,
  match,
  getWallets,
}) => {
  useEffect(() => {
    if (match.params.token) {
      validateUser(match.params.token);
      history.push('/login');
    }
    if (user.isAuthenticated) {
      getWallets({ userId: user.id });
      history.push('/');
    }
  }, [user]);

  const loading = user.loading;
  const loginForm = useForm();
  const signIn = async (data: UserLoginI) => {
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
