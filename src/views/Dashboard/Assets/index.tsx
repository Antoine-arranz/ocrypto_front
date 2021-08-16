import React from 'react';
import { Image, Table } from 'semantic-ui-react';
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
            <Table.HeaderCell>usd</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {quantity &&
            quantity.map((asset: any) => (
              <Table.Row>
                <Table.Cell>
                  <Image src={asset.image} rounded size='mini' />
                </Table.Cell>
                <Table.Cell>{asset.name}</Table.Cell>
                <Table.Cell>{asset.quantity}</Table.Cell>
                <Table.HeaderCell>{asset.usd_amount}</Table.HeaderCell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </Wrapper>
  );
};

export default Assets;
