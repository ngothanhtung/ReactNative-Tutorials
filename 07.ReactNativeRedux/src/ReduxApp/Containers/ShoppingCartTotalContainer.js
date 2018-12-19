import { connect } from 'react-redux';

import { addToCart, showShoppingCart } from '../Actions/shoppingCartAction';


import ShoppingCartTotalComponent from '../Components/ShoppingCartTotalComponent';

const mapStateToProps = (state) => ({
    count: state.counterReducer.count,
    total: state.shoppingCartReducer.total,
    // products: state.shoppingCartReducer.products
});

const mapDispatchToProps = {
    showShoppingCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTotalComponent);

