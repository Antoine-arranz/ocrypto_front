import { Formiz, useForm } from "@formiz/core";
import { isEmail } from "@formiz/validations";
import React from "react";
import Button from "../../components/Button";
import FormizSimpleInput from "../../components/Formiz";
import Wrapper from "../../components/Wrapper";

const Login = ({handleLogin,user}:any) => {
  const loginForm = useForm();
  const signIn =(data:any) => {
    handleLogin(data)
  }
  return (
    <Wrapper width='30%' margin='auto'>
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
        <Button
          type='submit'
          content='Submit'
        />
        </form>
      </Formiz>
    </Wrapper>
  );
};
export default Login;
