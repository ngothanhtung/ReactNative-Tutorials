import { connect } from 'react-redux';

import { increase, decrease } from '../actions';
import CounterComponent from '../components/CounterComponent';

const mapStateToProps = (state) => ({
    count: state.counterReducer.count
});

const mapDispatchToProps = (dispatch) => ({
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);

