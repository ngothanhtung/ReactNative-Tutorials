import { connect } from 'react-redux';
import { increaseCount } from '../Actions/counterAction';
import { login } from '../Actions/authAction';
import { updateTheme } from '../Actions/themeAction';
import LoginComponent from '../Components/LoginComponent';

const mapStateToProps = (state) => ({
    color: state.themeReducer.color,
    user: state.authReducer.user,
    loading: state.authReducer.loading,
});


const mapDispatchToProps = {
    login,
    increaseCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

