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
import { Image } from 'semantic-ui-react';
import img from '../../assets/logobitcoin.png';
import TextCustom from '../../components/TextCustom';

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
    <Wrapper width='70%'>
      <Spacer height='200px' />
      <Wrapper width='40%' margin='auto'>
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
      <Spacer height='100px' />
      <Wrapper display='flex' flexDirection='row'>
        <Image src={img} size='small' />
        <TextCustom fontSize='1em' margin='40px 0px 0px 50px'>
          Get pro when it's come to know what you own and what it's worth with
          cryptocurrencies. <br />
          Keep tracking accurately each trade you made into your portfolios
        </TextCustom>
      </Wrapper>
      <Spacer height='30px' />
      <Wrapper display='flex' flexDirection='row'>
        <TextCustom fontSize='1em' margin='40px 37px 0px 200px'>
          Get pro when it's come to know what you own and what it's worth with
          cryptocurrencies. <br />
          Keep tracking accurately each trade you made into your portfolios
        </TextCustom>
        <Image
          src='https://risibank.fr/cache/stickers/d2411/241146-full.jpg'
          size='medium'
        />
      </Wrapper>
    </Wrapper>
  );
};
export default Login;
