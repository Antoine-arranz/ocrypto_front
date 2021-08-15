import React, { useEffect, useState } from 'react';
import Events from './../../containers/Events';
import Chart from './Chart';
import Assets from '../../containers/Asset';
import Wrapper from '../../components/Wrapper';
import Button from '../../components/Button';
import AddEvent from '../../containers/AddEvent';
import Spacer from '../../components/Spacer';
const Dashboard = ({
  user,
  events,
  currentWallet,
  getAllEvents,
  getQuantity,
}: any) => {
  const [addEventModal, setaddEventModal] = useState<boolean>(false);

  useEffect(() => {
    if (currentWallet) {
      getAllEvents(currentWallet);
      getQuantity(currentWallet);
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

      <Chart />
      <Assets />
      <Spacer height='40px' />
      <Events />
      <Spacer height='60px' />
    </Wrapper>
  );
};

export default Dashboard;
