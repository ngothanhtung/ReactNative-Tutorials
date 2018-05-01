import { connect } from 'react-redux';

import { increaseCount, decreaseCount } from '../actions';
import CounterComponent from '../components/CounterComponent';

const mapStateToProps = (state) => ({
    count: state.counterReducer.count
});

const mapDispatchToProps = (dispatch) => ({
    increaseCount: () => dispatch(increaseCount()),
    decreaseCount: () => dispatch(decreaseCount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);

