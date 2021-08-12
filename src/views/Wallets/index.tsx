import React, { useEffect, useState } from 'react';

import { Button as Btn, Container, Divider, Table } from 'semantic-ui-react';
import LinkButton from '../../components/LinkButton';
import Loader from '../../components/Loader';
import Wrapper from '../../components/Wrapper';
import TableSpacedRows from '../../components/TableSpacedRows';
import Button from '../../components/Button';
import NewWallets from '../../containers/NewWallets';
import UpdateWallet from '../../containers/UpdateWallet';
const Wallets = ({ user, wallets, loading, getWallets, deleteWallet }: any) => {
  const [walletModal, setWalletModal] = useState(false);
  const [updateWalletModal, setUpdateWalletModal] = useState(false);
  const [walletUpdatedId, setWalletUpdatedId] = useState(null);
  const [walletUpdatedName, setWalletUpdatedName] = useState(null);

  const deleteButton = (walletId: number, userId: number) => {
    deleteWallet({ params: { userId: userId, walletId: walletId } });
  };
  useEffect(() => {
    getWallets({ userId: user.id });
  }, []);

  return (
    <Wrapper width='40%'>
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
      <UpdateWallet
        open={updateWalletModal}
        handleClose={() => setUpdateWalletModal(false)}
        walletId={walletUpdatedId}
        walletName={walletUpdatedName}
        userId={user.id}
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
                        <Btn.Group widths='one'>
                          <Button
                            content='Update'
                            icon='edit outline'
                            labelPosition='right'
                            walletName={wallet.name}
                            walletId={wallet.id}
                            onClick={() => {
                              setUpdateWalletModal(true);
                              setWalletUpdatedId(wallet.id);
                              setWalletUpdatedName(wallet.name);
                            }}
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
