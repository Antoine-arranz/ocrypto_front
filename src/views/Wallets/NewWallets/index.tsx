import { Formiz, useForm } from '@formiz/core';
import React, { useState } from 'react';
import FormizSimpleInput from '../../../components/Formiz';
import Spacer from '../../../components/Spacer';
import Wrapper from '../../../components/Wrapper';
import Button from '../../../components/Button';
import { Modal } from 'semantic-ui-react';

const NewWallets = ({ addNewWallet, user, open, handleClose }: any) => {
  const signUpForm = useForm();
  const save = (value: any) => {
    addNewWallet({ params: { userId: user.id }, data: { value } });
    handleClose();
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <Modal.Content>
        <Wrapper>
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
        </Wrapper>
      </Modal.Content>
    </Modal>
  );
};

export default NewWallets;
