import React from 'react';
import { Image, Table } from 'semantic-ui-react';
import Wrapper from '../../../components/Wrapper';

const Events = ({ events }: any) => {
  return (
    <Wrapper overflow='show'>
      History:
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Type</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Asset</Table.HeaderCell>
            <Table.HeaderCell>Counterparty</Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
            <Table.HeaderCell>Amount</Table.HeaderCell>
            <Table.HeaderCell>USD</Table.HeaderCell>
            <Table.HeaderCell>Platform</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {events &&
            events.map((event: any) => (
              <Table.Row>
                <Table.Cell>{event.type}</Table.Cell>
                <Table.Cell>
                  {new Date(event.date).toLocaleDateString('en', {
                    year: 'numeric',
                    month: '2-digit',
                    day: 'numeric',
                  })}
                </Table.Cell>
                <Table.Cell>
                  <Image src={event.CurrencyAsset.image} rounded size='mini' />
                </Table.Cell>
                <Table.Cell>
                  <Image
                    src={event.CurrencyCounterparty.image}
                    rounded
                    size='mini'
                  />
                </Table.Cell>
                <Table.Cell>{event.quantity}</Table.Cell>
                <Table.Cell>{event.amount}</Table.Cell>
                <Table.Cell>{Math.round(event.usd_amount)}</Table.Cell>

                <Table.Cell>
                  <Image src={event.Platform.image} rounded size='mini' />
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </Wrapper>
  );
};

export default Events;
