import React from "react";
import { Header as SemanticHeader, Dropdown, Menu } from "semantic-ui-react";

const Header = () => {
  return (
    <div className='header'>
      <SemanticHeader as='h1' block>
        <Menu secondary horizontal='true'>
          OCRYPTO
          <Menu.Item name='home' />
          <Menu.Item name='add events' />
          <Dropdown item text='Wallets'>
            <Dropdown.Menu></Dropdown.Menu>
          </Dropdown>
          <Menu.Item name='account' active position='right' />
        </Menu>
      </SemanticHeader>
    </div>
  );
};
export default Header;
