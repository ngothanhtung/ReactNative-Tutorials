import React, { Component } from 'react';
import { Text, View, ActivityIndicator, Dimensions } from 'react-native';
import { Image, Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import * as ActionTypes from '../actions/types';
import { withNavigation } from 'react-navigation';
import Loading from '../../../components/Loading';
const { width, height } = Dimensions.get('window');

class ProductDetails extends Component {
  render() {
    if (this.props.loading) {
      return <Loading />;
    }
    return (
      <View style={{ flex: 1 }}>
        {this.props.product && (
          <View style={{ flex: 1 }}>
            <View>
              <Image source={{ uri: this.props.product.coverImageUrl }} style={{ width: width, height: height / 3 }} PlaceholderContent={<ActivityIndicator />} />
            </View>
            <View style={{ padding: 12 }}>
              <Text>{this.props.product.name}</Text>
              <Text>{this.props.product.price}</Text>
              <View style={{ marginVertical: 24 }}>
                <Button
                  title='Add to cart'
                  onPress={() => {
                    this.props.addToCart(this.props.product, 1);
                  }}
                />
              </View>
            </View>
          </View>
        )}
      </View>
    );
  }
  componentDidMount() {
    const product = this.props.navigation.state.params.product;
    this.props.getProduct(product._id);
  }
}

// Nối các states vào props (values) của View Component
const mapStateToProps = state => ({
  loading: state.shopReducer.productReducer.loading,
  product: state.shopReducer.productReducer.product,
  error: state.shopReducer.productReducer.error,
});
// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = dispatch => ({
  getProduct: productId =>
    dispatch({
      type: ActionTypes.SHOP_GET_PRODUCT_BY_ID,
      productId: productId,
    }),
  addToCart: (product, quantity) => {
    dispatch({
      type: ActionTypes.SHOP_ADD_PRODUCT_TO_CART,
      product: product,
      quantity: quantity,
    });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(ProductDetails));
