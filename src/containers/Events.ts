import { connect } from 'react-redux';
import Event from '../views/Dashboard/Events';
import { RootState } from '..';

import selectors from '../store/selectors';

const mapState = (state: RootState) => {
  return {
    events: selectors.eventSelectors.event(state),
  };
};

const dispatchState = (dispatch: any) => {
  return {};
};
export default connect(mapState, dispatchState)(Event);
