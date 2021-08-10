import React, { useEffect, useState } from 'react';

import { Button as Btn, Container, Divider, Table } from 'semantic-ui-react';
import LinkButton from '../../components/LinkButton';
import Loader from '../../components/Loader';
import Wrapper from '../../components/Wrapper';
import TableSpacedRows from '../../components/TableSpacedRows';
import Button from '../../components/Button';
const Wallets = ({ user, history, getWallets, deleteWallet }: any) => {
  const deleteButton = (walletId: number) => {
    deleteWallet({ params: { walletId } });
  };
  useEffect(() => {
    getWallets({ params: { userId: user.id } });
  }, [user.wallet]);
  return (
    <Wrapper>
      <Divider hidden />
      <Container>
        <Wrapper display='flex' justifyContent='space-between'>
          <LinkButton
            labelPosition='right'
            icon='plus circle'
            content='Add new wallets'
            path={`/wallets/new`}
          />
        </Wrapper>
      </Container>

      {
        <Container>
          <TableSpacedRows sortable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Assets</Table.HeaderCell>
                <Table.HeaderCell />
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {user.wallets &&
                user.wallets.map((wallet: any, i: any) => {
                  return (
                    <Table.Row key={i}>
                      <Table.Cell>{wallet.name}</Table.Cell>
                      <Table.Cell>{wallet.name}</Table.Cell>
                      <Table.Cell textAlign='right'>
                        <Btn.Group horizontal widths='one'>
                          <LinkButton
                            content='Update'
                            icon='edit outline'
                            labelPosition='right'
                            path={`/companies/${wallet.id}`}
                          />
                          <Button
                            color='red'
                            content='Delete'
                            icon='trash alternate outline'
                            labelPosition='right'
                            path={`/wallet/${user.id}/delete`}
                            onClick={() => deleteButton(wallet.id)}
                          />
                        </Btn.Group>
                      </Table.Cell>
                    </Table.Row>
                  );
                })}
            </Table.Body>
          </TableSpacedRows>
        </Container>
      }
    </Wrapper>
  );
};

export default Wallets;
