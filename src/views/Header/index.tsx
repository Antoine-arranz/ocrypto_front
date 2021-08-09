import React from 'react';
import Wrapper from '../../components/Wrapper';
import { Header as SemanticHeader, Dropdown, Menu } from 'semantic-ui-react';

const Header = ({ isAuthenticated, history }: any) => {
  return (
    <Wrapper>
      <SemanticHeader as='h1' block>
        <Menu secondary horizontal='true'>
          OCRYPTO
          <Menu.Item name='home' />
          {isAuthenticated && <Menu.Item name='add events' />}
          {isAuthenticated && (
            <Dropdown item text='Wallets'>
              <Dropdown.Menu></Dropdown.Menu>
            </Dropdown>
          )}
          {isAuthenticated ? (
            <Menu.Item name='account' active position='right' />
          ) : (
            <Menu.Item
              name='create Account'
              active
              position='right'
              onClick={() => {
                history.push('/signIn');
              }}
            />
          )}
        </Menu>
      </SemanticHeader>
    </Wrapper>
  );
};
export default Header;
