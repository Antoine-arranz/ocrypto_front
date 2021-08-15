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
            <Table.HeaderCell>Currency Bougth</Table.HeaderCell>
            <Table.HeaderCell>Currency Sell</Table.HeaderCell>
            <Table.HeaderCell>Quantity Bougth</Table.HeaderCell>
            <Table.HeaderCell>Quantity Sell</Table.HeaderCell>
            <Table.HeaderCell>Amount Bougth</Table.HeaderCell>
            <Table.HeaderCell>Amount Sell</Table.HeaderCell>
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
                  <Image src={event.Currency.slug} rounded size='mini' />
                </Table.Cell>
                <Table.Cell>
                  <Image src={event.Currency.slug} rounded size='mini' />
                </Table.Cell>
                <Table.Cell>{event.quantityBougth}</Table.Cell>
                <Table.Cell>{event.quantitySell}</Table.Cell>
                <Table.Cell>{event.amountBought}</Table.Cell>
                <Table.Cell>{event.amountSell}</Table.Cell>
                <Table.Cell>
                  <Image src={event.Platform.slug} rounded size='mini' />
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </Wrapper>
  );
};

export default Events;
