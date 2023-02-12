import { connect } from 'react-redux';
import Account from '../views/Account';
import { RootState } from '..';
import selectors from '../store/selectors';
import { userActions } from '../store/user';

const mapState = (state: RootState) => {
  return {
    user: selectors.userSelectors.user(state),
  };
};

const dispatchState = (dispatch: any) => {
  return {
    updateAccount: (data: any) => {
      dispatch(userActions.updateAccount(data));
    },
  };
};
export default connect(mapState, dispatchState)(Account);
