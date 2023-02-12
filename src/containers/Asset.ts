import { connect } from 'react-redux';
import Asset from '../views/Dashboard/Assets';
import { RootState } from '..';
import selectors from '../store/selectors';

const mapState = (state: RootState) => {
  return {
    quantity: selectors.eventSelectors.quantity(state),
  };
};

const dispatchState = (dispatch: any) => {
  return {};
};
export default connect(mapState, dispatchState)(Asset);
