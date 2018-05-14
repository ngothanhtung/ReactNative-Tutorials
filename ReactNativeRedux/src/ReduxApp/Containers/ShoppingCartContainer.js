import { connect } from 'react-redux';

import { addToCart } from '../Actions/shoppingCartAction';
import { increaseCount } from '../Actions/counterAction';

import ShoppingCartComponent from '../Components/ShoppingCartComponent';

const mapStateToProps = (state) => ({
    addedProducts: state.shoppingCartReducer.addedProducts,
});


const mapDispatchToProps = {
    // removeFromCart,
    increaseCount
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartComponent);

