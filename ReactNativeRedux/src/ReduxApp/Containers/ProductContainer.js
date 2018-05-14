import { connect } from 'react-redux';

import { getProducts, addToCart } from '../Actions/shoppingCartAction';

import ProductComponent from '../Components/ProductComponent';

const mapStateToProps = (state) => ({
    total: state.shoppingCartReducer.total,
    products: state.shoppingCartReducer.products,
    // addedProducts: state.shoppingCartReducer.addedProducts,
});


const mapDispatchToProps = {
    getProducts, addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductComponent);

