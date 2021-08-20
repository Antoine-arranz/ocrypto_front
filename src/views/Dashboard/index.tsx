import React, { useEffect, useState } from 'react';
import Events from './../../containers/Events';
import Chart from '../../containers/Chart';
import Assets from '../../containers/Asset';
import Wrapper from '../../components/Wrapper';
import Button from '../../components/Button';
import AddEvent from '../../containers/AddEvent';
import Spacer from '../../components/Spacer';
import Loader from '../../components/Loader';
import TextCustom from '../../components/TextCustom';
import FloatingMessage from '../../components/FloatingMessage';
const Dashboard = ({
  user,
  currentWallet,
  getAllEvents,
  getQuantity,
  getChart,
  chartLoading,
  events,
}: any) => {
  const [addEventModal, setaddEventModal] = useState<boolean>(false);
  useEffect(() => {
    if (currentWallet) {
      getAllEvents(currentWallet);
      getQuantity(currentWallet);
      getChart(currentWallet);
    }
  }, [currentWallet]);

  return (
    <Wrapper
      display='flex'
      justifyContent='space-between'
      flexDirection='column'
    >
      <Spacer height='50px' />
      <Wrapper>
        {user.walletSelected && (
          <Button
            labelPosition='right'
            icon='plus circle'
            content='Add event'
            onClick={() => {
              setaddEventModal(true);
            }}
          />
        )}
      </Wrapper>
      <Spacer height='60px' />

      <AddEvent
        open={addEventModal}
        handleClose={() => setaddEventModal(false)}
        walletId={user.walletSelected}
      />
      {chartLoading && <Loader />}
      {currentWallet ? (
        events.length > 0 ? (
          <Wrapper>
            <Chart /> <Spacer height='60px' />
            <Assets />
            <Spacer height='40px' />
            <Events />
            <Spacer height='60px' />
          </Wrapper>
        ) : (
          <TextCustom
            border='1px solid black'
            padding='4em'
            fontSize='2em'
            borderRadius='5%'
          >
            You don't have any Event, use the button to add one
          </TextCustom>
        )
      ) : (
        <TextCustom
          border='1px solid black'
          padding='4em'
          fontSize='2em'
          borderRadius='5%'
        >
          You must select a wallet first
        </TextCustom>
      )}
      {}
    </Wrapper>
  );
};

export default Dashboard;
