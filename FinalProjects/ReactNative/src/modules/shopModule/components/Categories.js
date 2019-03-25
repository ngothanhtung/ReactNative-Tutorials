import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import * as ActionTypes from '../actions/types';
import { withNavigation } from 'react-navigation';
class Categories extends Component {
  renderItem = ({ item }) => {
    return <ListItem onPress={() => {
      this.props.navigation.navigate('ProductsScreen', {category: item});
    }} 
    title={item.name} 
    leftIcon={{ type: 'material-community', name: item.iconName, size: 24 }} 
    bottomDivider={true} 
    chevron={true} />;
  };
  render() {
    return (
      <View>
        <FlatList extraData={this.props} data={this.props.categories} renderItem={this.renderItem} keyExtractor={(item, index) => item._id} />
      </View>
    );
  }
  componentDidMount() {
    this.props.getCategories();
  }
}

// Nối các states vào props (values) của View Component
const mapStateToProps = state => ({
  loading: state.shopReducer.categoryReducer.loading,
  categories: state.shopReducer.categoryReducer.categories,
  error: state.shopReducer.categoryReducer.error,
});
// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = dispatch => ({
  getCategories: () =>
    dispatch({
      type: ActionTypes.SHOP_GET_CATEGORIES,
    }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)( withNavigation(Categories));
