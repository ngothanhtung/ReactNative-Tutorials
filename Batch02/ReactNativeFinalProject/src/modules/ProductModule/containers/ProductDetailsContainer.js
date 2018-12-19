import { connect } from 'react-redux';
import { getProduct, addToCart } from '../actions';

import ProductDetailsComponent from '../components/ProductDetailsComponent';

const mapStateToProps = (state) => {
  return ({
    product: state.productReducer.product,
    loading: state.productReducer.loading,
    errors: state.productReducer.errors,
  })
};

const mapDispatchToProps = {
  getProduct,
  addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsComponent);

