import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { ListItem, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as ActionTypes from '../actions/types';
import { withNavigation } from 'react-navigation';
import Loading from '../../../components/Loading';

class Total extends Component {
  render() {
    var items = this.props.cartItems;
    var total = 0;
    items.forEach(item => {
      total += ((item.product.price * (100 - item.product.discount)) / 100) * item.quantity;
    });
    return (
      <View>
        <Text style={{ color: 'red', fontWeight: '700' }}>{total}</Text>
      </View>
    );
  }
}

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
            icon={{ type: 'font-awesome', name: 'trash', size: 20 }}
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
      <View style={{ flex: 1 }}>
        <FlatList data={this.props.cartItems} renderItem={this.renderItem} keyExtractor={(item, index) => item._id} />
        <View style={{ marginVertical: 8, flexDirection: 'row' }}>
          <View>
            <Total cartItems={this.props.cartItems} />
          </View>
          <View style={{ flex: 1 }}>
            <Button
              title='Check Out'
              onPress={() => {
                this.props.navigation.navigate('CheckoutStackNavigator');
              }}
            />
          </View>
        </View>
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
