import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { getPhotosAsync } from '../actions';
import { GET_PHOTOS } from '../actions/types'

class Photos extends Component {
  componentDidMount() {
    //this.props.getPhotosAsync();
  }
  render() {
    return (
      <View>
        <Text> {this.props.total} </Text>
        <Button title="login" onPress={() => {
          this.props.login('', '123456789');
        }} />
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
  getPhotosAsync: () => dispatch(getPhotosAsync()),
  getPhotosBySaga: () => dispatch({
    type: GET_PHOTOS
  }),
  login: (email, password) => dispatch({
    type: 'LOGIN',
    email: email,
    password: password
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Photos);

