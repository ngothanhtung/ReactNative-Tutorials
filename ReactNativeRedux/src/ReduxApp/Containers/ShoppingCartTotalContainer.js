import { connect } from 'react-redux';

import { addToCart } from '../Actions/shoppingCartAction';

import ShoppingCartTotalComponent from '../Components/ShoppingCartTotalComponent';

const mapStateToProps = (state) => ({
    total: state.shoppingCartReducer.total,
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTotalComponent);

