import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class TouchComponentClass extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          height: 48,
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          console.log('TouchableOpacity onPress');
          this.props.myOnPress();
        }}>
        <Text>Click me</Text>
      </TouchableOpacity>
    );
  }
}

const TouchComponent = ({myOnPress}) => {
  return (
    <TouchableOpacity
      style={{
        height: 48,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={() => {
        console.log('TouchableOpacity onPress');
        // myOnPress();
        this.props.myOnPress();
      }}>
      <Text>Click me</Text>
    </TouchableOpacity>
  );
};

export default function CallbackExample() {
  const [visible, setVisible] = React.useState(true);
  return (
    <View style={{flex: 1, padding: 60}}>
      {visible && <Text>Hello Callback</Text>}
      <TouchComponent
        myOnPress={() => {
          setVisible(!visible);
        }}
      />

      <TouchComponentClass
        myOnPress={() => {
          setVisible(!visible);
        }}
      />
    </View>
  );
}
