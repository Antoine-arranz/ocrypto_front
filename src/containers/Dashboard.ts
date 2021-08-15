import { connect } from 'react-redux';
import Dashboard from '../views/Dashboard';
import { RootState } from '..';
import selectors from '../store/selectors';
import { eventActions } from '../store/event';
const mapState = (state: RootState) => {
  return {
    user: selectors.userSelectors.user(state),
    currentWallet: selectors.userSelectors.currentWalletId(state),
    events: selectors.eventSelectors.event(state),
  };
};

const dispatchState = (dispatch: any) => {
  return {
    getAllEvents: (walletId: number) => {
      dispatch(eventActions.getAllevents(walletId));
    },
    getQuantity: (walletId: number) => {
      dispatch(eventActions.getQuantityTotal(walletId));
    },
  };
};
export default connect(mapState, dispatchState)(Dashboard);
