import { Formiz, useForm } from '@formiz/core';
import React, { useState } from 'react';
import FormizSimpleInput from '../../../components/Formiz';
import Spacer from '../../../components/Spacer';
import Wrapper from '../../../components/Wrapper';
import Button from '../../../components/Button';
import { Modal } from 'semantic-ui-react';
import { UpdateWallerPropsI } from '../../../interface/wallet/walletSchema';

const UpdateWallet: React.FC<UpdateWallerPropsI> = ({
  userId,
  open,
  handleClose,
  walletName,
  updateWallet,
  walletId,
}: any) => {
  const signUpForm = useForm();
  const update = (value: { name: string }) => {
    updateWallet({ params: { walletId, userId }, value });
    handleClose();
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <Modal.Content>
        <Wrapper>
          <Formiz
            connect={signUpForm}
            onValidSubmit={update}
            initialValues={{ name: walletName }}
          >
            <form onSubmit={signUpForm.submit} noValidate>
              <FormizSimpleInput
                type='name'
                name='name'
                label='name'
                placeholder={walletName}
                value={walletName}
                required='name is required'
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

export default UpdateWallet;
