import { connect } from 'react-redux';

import { increaseCount, decreaseCount } from '../Actions/counterAction';
import CounterComponent from '../Components/CounterComponent';
// Nối các states vào props (values) của View Component
const mapStateToProps = (state) => ({
    count: state.counterReducer.count
});
// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
    increaseCount: (number) => dispatch(increaseCount(number)),
    decreaseCount: (number) => dispatch(decreaseCount(number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);


