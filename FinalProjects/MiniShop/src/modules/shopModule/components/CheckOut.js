import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import * as ActionTypes from '../actions/types';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import ShoppingCart from './ShoppingCart';

class CheckOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      phone: '',
      address: '',
    };
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Input
            onChangeText={text => this.setState({ fullname: text })}
            leftIcon={{ name: 'home', size: 20, marginRight: 12 }}
            placeholder='Full name'
            errorStyle={{ color: 'red' }}
            errorMessage=''
            underlineColorAndroid='transparent'
            inputContainerStyle={{
              borderBottomWidth: 0,
              height: 48,
            }}
            containerStyle={{
              backgroundColor: '#ecf0f1',
              height: 48,
              borderRadius: 24,
            }}
          />
          <Input
            placeholder='Phone number'
            errorStyle={{ color: 'red' }}
            errorMessage=''
            onChangeText={text => this.setState({ phone: text })}
          />
          <Input
            placeholder='Address'
            errorStyle={{ color: 'red' }}
            errorMessage=''
            onChangeText={text => this.setState({ address: text })}
          />
        </View>

        {/* <ShoppingCart /> */}
        <Button
          title='Confirm & Complete'
          onPress={() => {
            this.props.checkout(
              this.props.cartItems,
              this.state.fullname,
              this.state.phone,
              this.state.address,
            );
          }}
        />
      </View>
    );
  }
}

// Nối các states vào props (values) của View Component
const mapStateToProps = state => ({
  loading: state.shopReducer.checkoutReducer.loading,
  cartItems: state.shopReducer.shoppingCartReducer.cartItems,
  error: state.shopReducer.checkoutReducer.error,
});
// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = dispatch => ({
  checkout: (cartItems, fullname, phone, address) =>
    dispatch({
      type: ActionTypes.SHOP_CHECKOUT,
      cartItems,
      fullname,
      phone,
      address,
    }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(CheckOut));
