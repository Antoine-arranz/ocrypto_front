import React from 'react';
import Wrapper from '../../components/Wrapper';
import { Dropdown, Menu } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const Header = ({ isAuthenticated, changeSelectedWallet, wallets }: any) => {
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
            <Redirect to='/' />;
          }}
        />
        {isAuthenticated && (
          <Dropdown
            item
            placeholder='Wallets'
            className='whitecolor'
            options={wallets.map((wallet: any, i: number) => ({
              key: i,
              text: wallet.name,
              value: wallet.id,
            }))}
            onChange={(event, { value }) => {
              changeSelectedWallet({ walletId: value });
            }}
          />
        )}
        {isAuthenticated ? (
          <Menu.Item
            name='account'
            active
            position='right'
            className='whitecolor'
          />
        ) : (
          <Menu.Item
            className='whitecolor'
            name='create Account'
            active
            position='right'
            onClick={() => {
              <Redirect to='/signIn' />;
            }}
          />
        )}
      </Menu>
    </Wrapper>
  );
};
export default Header;
