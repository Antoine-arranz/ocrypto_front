import React from 'react';
import { Table } from 'semantic-ui-react';
import Wrapper from '../../../components/Wrapper';

const Assets = ({ quantity }: any): any => {
  return (
    <Wrapper width='80%' margin='auto'>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Logo</Table.HeaderCell>
            <Table.HeaderCell>Asset</Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {quantity &&
            quantity.map((asset: any) => (
              <Table.Row>
                <Table.Cell>logo</Table.Cell>
                <Table.Cell>{asset.CurrencyBought_Id}</Table.Cell>
                <Table.Cell>{asset.quantity}</Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </Wrapper>
  );
};

export default Assets;
