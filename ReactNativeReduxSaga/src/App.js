import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PeopleScreen from './PeopleScreen';
import { connect } from 'react-redux'
import { fetchPeople } from './actions'


function mapStateToProps(state) {
  return {
    appData: state.dataReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPeople: () => dispatch(fetchPeople())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleScreen);