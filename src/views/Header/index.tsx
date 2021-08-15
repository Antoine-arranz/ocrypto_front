import React from 'react';
import Wrapper from '../../components/Wrapper';
import { Dropdown, Menu } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const Header = ({
  isAuthenticated,
  changeSelectedWallet,
  wallets,
  history,
}: any) => {
  return (
    <Wrapper backgroundColor='#5cba99'>
      <Menu secondary horizontal='true'>
        <Menu.Item name='logo' className='whitecolor'>
          OCRYPTO
        </Menu.Item>
        <Menu.Item
          name='home'
          className='whitecolor'
          onClick={() => {
            history.push('/');
          }}
        />
        {isAuthenticated && (
          <Dropdown
            item
            placeholder='Select a wallet'
            className='whitecolor'
            options={wallets.map((wallet: any, i: number) => ({
              key: i,
              text: wallet.name,
              value: wallet.id,
            }))}
            onChange={(event, { value }) => {
              changeSelectedWallet({ walletId: value });
              history.push('/');
            }}
          />
        )}
        {isAuthenticated && (
          <Menu.Item
            name='wallets'
            active
            position='right'
            onClick={() => {
              history.push('/wallets');
            }}
            className='whitecolor'
          />
        )}
        {isAuthenticated ? (
          <Menu.Item
            name='account'
            active
            position='right'
            className='whitecolor'
            onClick={() => {
              history.push('/account');
            }}
          />
        ) : (
          <Menu.Item
            className='whitecolor'
            name='create Account'
            active
            position='right'
            onClick={() => {
              history.push('/signIn');
            }}
          />
        )}
      </Menu>
    </Wrapper>
  );
};
export default Header;
