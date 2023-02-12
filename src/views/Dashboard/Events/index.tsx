import React from 'react';
import { Image, Table } from 'semantic-ui-react';
import TextCustom from '../../../components/TextCustom';
import Wrapper from '../../../components/Wrapper';

const Events = ({ events }: any) => {
  return (
    <Wrapper overflow='show'>
      <TextCustom color='#5cba99' fontWeight='bold'>
        History :
      </TextCustom>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign='center'>Type</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Date</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Asset</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Counterparty</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Quantity</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Amount</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>USD</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Platform</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {events &&
            events.map((event: any) => (
              <Table.Row>
                <Table.Cell textAlign='center'>{event.type}</Table.Cell>
                <Table.Cell textAlign='center'>
                  {new Date(event.date).toLocaleDateString('en', {
                    year: 'numeric',
                    month: '2-digit',
                    day: 'numeric',
                  })}
                </Table.Cell>
                <Table.Cell>
                  <Image
                    src={event.CurrencyAsset.image}
                    rounded
                    size='mini'
                    centered
                  />
                </Table.Cell>
                <Table.Cell>
                  <Image
                    src={event.CurrencyCounterparty.image}
                    rounded
                    size='mini'
                    centered
                  />
                </Table.Cell>
                <Table.Cell textAlign='center'>{event.quantity}</Table.Cell>
                <Table.Cell textAlign='center'>
                  {event.amount}{' '}
                  {event.CurrencyCounterparty.symbol.toUpperCase()}
                </Table.Cell>
                <Table.Cell textAlign='center'>
                  {Math.round(event.usdAmount)}
                </Table.Cell>

                <Table.Cell>
                  <Image
                    src={event.Platform.image}
                    rounded
                    size='mini'
                    centered
                  />
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </Wrapper>
  );
};

export default Events;
