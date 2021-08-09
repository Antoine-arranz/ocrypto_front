import { connect } from 'react-redux';
import FloatingMessage from '../components/FloatingMessage';
import selectors from '../store/selectors';
import { messageActions } from '../store/messages';
const mapState = (state: string) => {
  return {
    message: selectors.messageSelectors.message(state),
  };
};

const dispatchState = (dispatch: any) => {
  return {
    resetMessage: (value: any) => {
      dispatch(messageActions.resetMessage());
    },
  };
};

export default connect(mapState, dispatchState)(FloatingMessage);
