import { Formiz, useForm } from '@formiz/core';
import React from 'react';
import FormizSimpleInput from '../../../components/Formiz';
import Spacer from '../../../components/Spacer';
import Wrapper from '../../../components/Wrapper';
import Button from '../../../components/Button';

const NewWallets = ({ addNewWallet, user, history }: any) => {
  const signUpForm = useForm();

  const save = (value: any) => {
    addNewWallet({ params: { userId: user.id }, data: { name: value } });
    history.push('/wallets');
  };
  return (
    <Formiz connect={signUpForm} onValidSubmit={save}>
      <form onSubmit={signUpForm.submit} noValidate>
        <FormizSimpleInput
          type='name'
          name='name'
          label='name'
          placeholder='wallet'
          required=' name is required'
        />
        <Spacer height='10px' />
        <Button size='large' type='submit' content='Submit' />
      </form>
    </Formiz>
  );
};

export default NewWallets;
