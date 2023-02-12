import React from 'react';
import { Image, Table } from 'semantic-ui-react';
import TextCustom from '../../../components/TextCustom';
import Wrapper from '../../../components/Wrapper';

const Assets = ({ quantity }: any): any => {
  return (
    <Wrapper width='80%' margin='auto'>
      {quantity.lenght === 0 ? (
        <TextCustom color='#5cba99' fontWeight='bolder'>
          Asset :
        </TextCustom>
      ) : (
        <TextCustom color='#5cba99' fontWeight='bold'>
          Asset :
        </TextCustom>
      )}
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
                  <Image src={asset.Currency.image} rounded size='mini' />
                </Table.Cell>
                <Table.Cell>{asset.Currency.name}</Table.Cell>
                <Table.Cell>{asset.currencyTotal}</Table.Cell>
                <Table.HeaderCell>
                  {Math.floor(asset.usdAmount)}
                </Table.HeaderCell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </Wrapper>
  );
};

export default Assets;
