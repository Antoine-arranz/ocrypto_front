import React from 'react';
import Wrapper from '../../components/Wrapper';
import { Header as SemanticHeader, Dropdown, Menu } from 'semantic-ui-react';

const Footer = () => {
  return (
    <Wrapper backgroundColor='#5cba99'>
      <Menu secondary horizontal='true'>
        <Menu.Item className='whitecolor'>CONTACT US</Menu.Item>
        <Menu.Item className='whitecolor' />
      </Menu>
    </Wrapper>
  );
};
export default Footer;
