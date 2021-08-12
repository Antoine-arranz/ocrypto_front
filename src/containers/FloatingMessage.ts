import { connect } from 'react-redux';
import FloatingMessage from '../components/FloatingMessage';
import selectors from '../store/selectors';
import { messageActions } from '../store/messages';
import { RootState } from '..';
import { resetMessageAction } from '../interface/messages';
import { Dispatch } from 'react';
const mapState = (state: RootState) => {
  return {
    message: selectors.messageSelectors.message(state),
  };
};

const dispatchState = (dispatch: Dispatch<resetMessageAction>) => {
  return {
    resetMessage: () => {
      dispatch(messageActions.resetMessage());
    },
  };
};

export default connect(mapState, dispatchState)(FloatingMessage);
