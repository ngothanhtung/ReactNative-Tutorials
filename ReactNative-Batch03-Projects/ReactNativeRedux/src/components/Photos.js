import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { getPhotosAsync } from '../actions';

class Photos extends Component {
  componentDidMount() {
    //this.props.getPhotosAsync();
  }
  render() {
    return (
      <View>
        <Text> {this.props.total} </Text>
      </View>
    )
  }
}

// Nối các states vào props (values) của View Component
const mapStateToProps = (state) => ({
  photos: state.calculatorReducer.photos,
  loading: state.calculatorReducer.loading,
  total: state.calculatorReducer.total,
});
// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
  getPhotosAsync: () => dispatch(getPhotosAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(Photos);

