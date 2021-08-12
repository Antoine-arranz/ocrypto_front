import React from 'react';
import Wrapper from '../../components/Wrapper';
import { Header as SemanticHeader, Dropdown, Menu } from 'semantic-ui-react';

const Header = ({ isAuthenticated, history }: any) => {
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
            history.push('/login');
          }}
        />
        {isAuthenticated && (
          <Menu.Item name='add events' className='whitecolor' />
        )}
        {isAuthenticated && (
          <Dropdown item text='Wallets' className='whitecolor'>
            <Dropdown.Menu></Dropdown.Menu>
          </Dropdown>
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
              history.push('/signIn');
            }}
          />
        )}
      </Menu>
    </Wrapper>
  );
};
export default Header;
