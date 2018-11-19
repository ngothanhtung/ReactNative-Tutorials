import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getProducts } from '../actions';
import { View, Button } from 'react-native'


class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    return (
      <View>
        <Button title="Click me" onPress={() => {
          this.props.getProducts()
        }} />
      </View>
    )
  }
}


// Nối các states vào props (values) của View Component
const mapStateToProps = (state) => ({
  products: state.productReducer.products
});
// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);

