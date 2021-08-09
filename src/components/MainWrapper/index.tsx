import React from 'react';
import { MainWrapper } from './mainWrapperStyled';

const Index = ({ children, backgroundImg = '' }: any) => {
  return <MainWrapper>{children}</MainWrapper>;
};

export default Index;
