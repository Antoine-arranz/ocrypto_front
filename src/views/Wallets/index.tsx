import React, { useEffect, useState } from 'react';

import { Button as Btn, Container, Divider, Table } from 'semantic-ui-react';
import LinkButton from '../../components/LinkButton';
import Loader from '../../components/Loader';
import Wrapper from '../../components/Wrapper';
import TableSpacedRows from '../../components/TableSpacedRows';
import Button from '../../components/Button';
import NewWallets from '../../containers/NewWallets';
const Wallets = ({
  user,
  wallets,
  loading,
  history,
  getWallets,
  deleteWallet,
}: any) => {
  const [walletModal, setWalletModal] = useState(false);
  const deleteButton = (walletId: number, userId: number) => {
    deleteWallet({ params: { userId: userId, walletId: walletId } });
  };
  useEffect(() => {
    getWallets({ userId: user.id });
  }, []);

  return (
    <Wrapper>
      <Divider hidden />
      {loading && <Loader />}
      <Container>
        <Wrapper display='flex' justifyContent='space-between'>
          <Button
            labelPosition='right'
            icon='plus circle'
            content='Add new wallets'
            onClick={() => {
              setWalletModal(true);
            }}
          />
        </Wrapper>
      </Container>
      <NewWallets
        open={walletModal}
        handleClose={() => setWalletModal(false)}
      />
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
              {wallets &&
                wallets.map((wallet: any, i: any) => {
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
                            onClick={() =>
                              deleteButton(wallet.id, wallet.User_Id)
                            }
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
