import { connect } from 'react-redux';

import ShoppingCartTotalComponent from '../components/ShoppingCartTotalComponent';

const mapStateToProps = (state) => ({
  total: state.productReducer.total,
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTotalComponent);

