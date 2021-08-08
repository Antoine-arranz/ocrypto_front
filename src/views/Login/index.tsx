import { Formiz, useForm } from "@formiz/core";
import { isEmail } from "@formiz/validations";
import React, { useState } from "react";
import Loader from "../../components/Loader";
import Button from "../../components/Button";
import FormizSimpleInput from "../../components/Formiz";
import Wrapper from "../../components/Wrapper";
import { useEffect } from "react";
import { ClickableText } from "../../components/ClickatableText/ClickableTextStyled";

const Login = ({ handleLogin, user }: any) => {
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
                message: "This is not a valid email",
              },
            ]}
          />
          <FormizSimpleInput
            type='password'
            name='password'
            label='Password'
            placeholder='Password'
            required='Password is required'
          />
          <Button type='submit' content='Submit' />
        </form>
      </Formiz>
      <ClickableText textalign='center'>Forgot your password ?</ClickableText>
    </Wrapper>
  );
};
export default Login;
