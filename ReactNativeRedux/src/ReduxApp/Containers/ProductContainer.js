import { connect } from 'react-redux';

import { addToCart } from '../Actions/shoppingCartAction';

import ProductComponent from '../Components/ProductComponent';

const mapStateToProps = (state) => ({
    // total: state.shoppingCartReducer.total,
    // addedProducts: state.shoppingCartReducer.addedProducts,
});


const mapDispatchToProps = {
    addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductComponent);

