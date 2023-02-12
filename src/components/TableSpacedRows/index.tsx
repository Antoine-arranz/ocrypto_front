import React from 'react';

import { Table } from './tableSpaceRowsStyled';

const Index = (props: any) => {
  return <Table props={props}>{props.children}</Table>;
};

export default Index;
