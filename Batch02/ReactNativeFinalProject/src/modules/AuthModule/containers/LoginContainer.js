import { connect } from 'react-redux';
import { login } from '../actions';

import LoginComponent from '../components/LoginComponent';

const mapStateToProps = (state) => {
  return ({
    loggedInUser: state.authReducer.loggedInUser,
    loading: state.authReducer.loading,
  })
};

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

