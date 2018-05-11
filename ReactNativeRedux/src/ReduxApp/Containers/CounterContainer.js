import { connect } from 'react-redux';

import { increaseCount, decreaseCount } from '../Actions/counterAction';
import CounterComponent from '../Components/CounterComponent';

const mapStateToProps = (state) => ({
    count: state.counterReducer.count
});

const mapDispatchToProps = (dispatch) => ({
    increaseCount: (number) => dispatch(increaseCount(number)),
    decreaseCount: (number) => dispatch(decreaseCount(number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);


