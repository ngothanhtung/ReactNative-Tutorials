import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import * as ActionTypes from '../actions/types';
import { withNavigation } from 'react-navigation';
class Products extends Component {
  renderItem = ({ item }) => {
    return (
      <ListItem
        onPress={() => {
          this.props.navigation.navigate('ProductDetailsScreen', { product: item });
        }}
        title={item.name}
        bottomDivider={true}
        chevron={true}
      />
    );
  };
  render() {
    return (
      <View>
        <FlatList data={this.props.products} renderItem={this.renderItem} keyExtractor={(item, index) => item._id} />
      </View>
    );
  }
  componentDidMount() {
    const category = this.props.navigation.state.params.category;
    this.props.getProducts(category._id);
  }
}

// Nối các states vào props (values) của View Component
const mapStateToProps = state => ({
  loading: state.shopReducer.productReducer.loading,
  products: state.shopReducer.productReducer.products,
  error: state.shopReducer.productReducer.error,
});
// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = dispatch => ({
  getProducts: categoryId =>
    dispatch({
      type: ActionTypes.SHOP_GET_PRODUCTS_BY_CATEGORY,
      categoryId: categoryId,
    }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(Products));
