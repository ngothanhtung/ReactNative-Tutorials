import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class ShoppingCartBadge extends Component {
  render() {
    return (
      <View style={{ position: 'relative' }}>
        <Icon color='white' name='cart' size={20} />
        <View
          style={{
            position: 'absolute',
            padding: 2.5,
            height: 18,
            width: 18,
            borderRadius: 50,
            opacity: 1,
            backgroundColor: 'red',
            top: -6,
            right: -8,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: 'white',
            borderWidth: 1.5,
          }}
        >
          <Text style={{ color: 'white', fontSize: 8, fontWeight: '700' }}>{this.props.number}</Text>
        </View>
      </View>
    );
  }
}

// Nối các states vào props (values) của View Component
const mapStateToProps = state => ({
  number: state.shopReducer.shoppingCartReducer.cartItems.length,
});
// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = dispatch => ({
  // getCategories: () =>
  //   dispatch({
  //     type: ActionTypes.SHOP_GET_CATEGORIES,
  //   }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShoppingCartBadge);
