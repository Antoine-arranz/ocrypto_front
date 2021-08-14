import { connect } from 'react-redux';
import AddEvent from '../views/Dashboard/Events/AddEvent';
import { RootState } from '..';
import { platformActions } from '../store/platform';
import selectors from '../store/selectors';
import { currencyActions } from '../store/currency';
const mapState = (state: RootState) => {
  return {
    platforms: selectors.platformSelectors.platform(state),
    currencies: selectors.currencySelectors.currency(state),
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
  };
};
export default connect(mapState, dispatchState)(AddEvent);
