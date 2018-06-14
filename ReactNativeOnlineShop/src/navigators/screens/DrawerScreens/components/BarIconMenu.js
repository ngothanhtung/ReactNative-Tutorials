import React, { Component } from 'react';
import { StyleSheet, Button, View, Text, TouchableOpacity } from 'react-native';
import { DrawerActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

const BarIconMenu = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => {
      navigation.dispatch(DrawerActions.openDrawer());
    }}>
      <View style={{ padding: 6, paddingRight: 12 }}>
        <Icon name="bars" size={26} />
      </View>
    </TouchableOpacity>
  );
}

export default BarIconMenu;