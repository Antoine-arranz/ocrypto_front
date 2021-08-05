import React from "react";
import Wrapper from "../../components/Wrapper";
import { Header as SemanticHeader, Dropdown, Menu } from "semantic-ui-react";

const Header = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};
export default Header;
