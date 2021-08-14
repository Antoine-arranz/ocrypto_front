import React, { useEffect, useState } from 'react';
import Events from './Events';
import Chart from './Chart';
import Assets from './Assets';
import Wrapper from '../../components/Wrapper';
import Button from '../../components/Button';
import AddEvent from '../../containers/AddEvent';
import Spacer from '../../components/Spacer';
const Dashboard = ({ user }: any) => {
  const [addEventModal, setaddEventModal] = useState<boolean>(false);

  return (
    <Wrapper
      display='flex'
      justifyContent='space-between'
      flexDirection='column'
    >
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
      <Events />
    </Wrapper>
  );
};

export default Dashboard;
