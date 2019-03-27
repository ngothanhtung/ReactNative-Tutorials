import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { ListItem, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as ActionTypes from '../actions/types';
import { withNavigation } from 'react-navigation';
import Loading from '../../../components/Loading';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  renderItem = ({ item }) => {
    return (
      <ListItem
        title={item.product.name}
        subtitle={item.quantity}
        bottomDivider={true}
        chevron={true}
        rightElement={
          <Button
            title='Remove'
            onPress={() => {
              this.props.removeProductFromCart(item.product);
            }}
          />
        }
      />
    );
  };
  render() {
    return (
      <View>
        <FlatList
          data={this.props.cartItems}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => item._id}
        />
      </View>
    );
  }
}

// Nối các states vào props (values) của View Component
const mapStateToProps = state => ({
  cartItems: state.shopReducer.shoppingCartReducer.cartItems,
});
// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = dispatch => ({
  removeProductFromCart: product =>
    dispatch({
      type: ActionTypes.SHOP_REMOVE_PRODUCT_FROM_CART,
      product: product,
    }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(ShoppingCart));
