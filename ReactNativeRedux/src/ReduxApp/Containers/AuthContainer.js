import { connect } from 'react-redux';
import { login } from '../Actions/authAction';
import LoginComponent from '../Components/LoginComponent';

const mapStateToProps = (state) => ({
    user: state.authReducer.user,
    loading: state.authReducer.loading,
});

const mapDispatchToProps = {
    login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

