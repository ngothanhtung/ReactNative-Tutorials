import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from './components/Button';

export default function index() {
  return (
    <SafeAreaView>
      <Button
        loading={true}
        disabled={true}
        title="My Button"
        iconName="home"
        // icon={<Icon name="bell" size={24} color="white" />}
        onPress={() => {
          console.log('Pressed');
        }}
        // style={{ backgroundColor: 'red' }}
      />
    </SafeAreaView>
  );
}
