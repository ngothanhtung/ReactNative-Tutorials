import { connect } from 'react-redux';
import { removeFromCart, hideShoppingCart } from '../actions';
import ShoppingCartComponent from '../components/ShoppingCartComponent';

const mapStateToProps = (state) => ({
  addedProducts: state.productReducer.addedProducts,
  shoppingCartVisible: state.productReducer.shoppingCartVisible,
});

const mapDispatchToProps = {
  removeFromCart,
  hideShoppingCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartComponent);

