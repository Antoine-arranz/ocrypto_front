import { connect } from 'react-redux';
import AddEvent from '../views/Dashboard/Events/AddEvent';
import { RootState } from '..';
import { platformActions } from '../store/platform';
import selectors from '../store/selectors';
import { currencyActions } from '../store/currency';
import { eventActions } from '../store/event';
const mapState = (state: RootState) => {
  return {
    platforms: selectors.platformSelectors.platform(state),
    currencies: selectors.currencySelectors.currency(state),
    currentWalletId: selectors.userSelectors.currentWalletId(state),
  };
};

const dispatchState = (dispatch: any) => {
  return {
    getPlatforms: () => {
      dispatch(platformActions.getAllPlatforms());
    },
    getCurrencies: () => {
      dispatch(currencyActions.getAllCurrencies());
    },
    addEvent: ({ params, data }: any) => {
      dispatch(eventActions.addEvent({ params, data }));
    },
  };
};
export default connect(mapState, dispatchState)(AddEvent);
