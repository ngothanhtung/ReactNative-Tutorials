import { connect } from 'react-redux';

import { addToCart } from '../Actions/shoppingCartAction';

import ShoppingCartComponent from '../Components/ShoppingCartComponent';

const mapStateToProps = (state) => ({
    addedProducts: state.shoppingCartReducer.addedProducts,
});


const mapDispatchToProps = {
    addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartComponent);

