import { connect } from 'react-redux';

import { increaseCount, decreaseCount } from '../Actions';
import CounterComponent from '../Components/CounterComponent';

const mapStateToProps = (state) => ({
    count: state.counterReducer.count
});

const mapDispatchToProps = (dispatch) => ({
    increaseCount: () => dispatch(increaseCount()),
    decreaseCount: () => dispatch(decreaseCount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);

