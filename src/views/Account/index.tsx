import { Formiz, useForm } from '@formiz/core';
import { isEmail, isPattern } from '@formiz/validations';
import React from 'react';
import { Grid } from 'semantic-ui-react';
import FormizSimpleInput from '../../components/Formiz';
import Button from '../../components/Button';
import Loader from '../../components/Loader';

import Wrapper from '../../components/Wrapper';
import Spacer from '../../components/Spacer';
import { UserSignInI } from '../../interface/formSchema/user';

const Account: React.FC<any> = ({ user, updateAccount }) => {
  const signUpForm = useForm();
  const save = async (data: any) => {
    updateAccount({ params: { userId: user.id }, data: { data } });
  };
  return (
    <Wrapper width='100' margin='auto'>
      {user.loading && <Loader />}
      <Spacer height='10px' />
      <Formiz
        connect={signUpForm}
        onValidSubmit={save}
        initialValues={{
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        }}
      >
        <form onSubmit={signUpForm.submit}>
          <Grid>
            <Grid.Row columns='3'>
              <Grid.Column>
                <FormizSimpleInput
                  type='firstName'
                  name='firstName'
                  label='First name'
                  placeholder={user.firstName}
                  value={user.firstName}
                  required='First name is required'
                />
              </Grid.Column>
              <Grid.Column>
                <FormizSimpleInput
                  type='lastName'
                  name='lastName'
                  label='Last name'
                  placeholder={user.lastName}
                  value={user.lastName}
                  required='Last name is required'
                />
              </Grid.Column>
              <Grid.Column>
                <FormizSimpleInput
                  type='email'
                  name='email'
                  label='Email'
                  placeholder={user.email}
                  value={user.email}
                  required='Last name is required'
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Spacer height='10px' />
          <Button size='large' type='submit' content='Submit' />
        </form>
      </Formiz>
    </Wrapper>
  );
};
export default Account;
