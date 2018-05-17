import { connect } from 'react-redux';
import { removeFromCart, hideShoppingCart } from '../Actions/shoppingCartAction';
import ShoppingCartComponent from '../Components/ShoppingCartComponent';

const mapStateToProps = (state) => ({
    addedProducts: state.shoppingCartReducer.addedProducts,
    shoppingCartVisible: state.shoppingCartReducer.shoppingCartVisible,
});

const mapDispatchToProps = {
    removeFromCart,
    hideShoppingCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartComponent);

