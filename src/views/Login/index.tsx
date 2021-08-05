import { Formiz } from "@formiz/core";
import { isEmail } from "@formiz/validations";
import React from "react";
import Button from "../../components/Button";
import FormizSimpleInput from "../../components/Formiz";
import Wrapper from "../../components/Wrapper";

const Login = () => {
  return (
    <Wrapper width='50%' margin='auto'>
      <Formiz onSubmit={(values) => console.log(values)}>
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
          textAlign='right'
          type='submit'
          content='coucou'
          onSubmit={(values: any) => console.log(values)}
        />
      </Formiz>
    </Wrapper>
  );
};
export default Login;
