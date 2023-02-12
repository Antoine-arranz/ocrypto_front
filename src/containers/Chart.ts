import { connect } from 'react-redux';
import Chart from '../views/Dashboard/Chart';
import { RootState } from '..';
import selectors from '../store/selectors';

const mapState = (state: RootState) => {
  return {
    data: selectors.chartSelectors.chartData(state),
  };
};

const dispatchState = (dispatch: any) => {
  return {};
};
export default connect(mapState, dispatchState)(Chart);
