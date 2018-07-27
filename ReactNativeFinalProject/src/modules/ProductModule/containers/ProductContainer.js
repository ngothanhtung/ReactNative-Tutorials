import { connect } from 'react-redux';
import { getProducts } from '../actions';

import ProductsComponent from '../components/ProductsComponent';

const mapStateToProps = (state) => {
  return ({
    products: state.productReducer.products,
    loading: state.productReducer.loading,
    errors: state.productReducer.errors,
  })
};

const mapDispatchToProps = {
  getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsComponent);

