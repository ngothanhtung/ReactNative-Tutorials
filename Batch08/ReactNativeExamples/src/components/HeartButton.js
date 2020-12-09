import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function HeartButton() {
  const [state, setState] = React.useState({ status: false });

  return (
    <View>
      <Icon
        name="heart"
        color={state.status ? 'red' : 'gray'}
        size={32}
        onPress={() => {
          let newStatus = !state.status;
          setState({ status: newStatus });
        }}
      />
    </View>
  );
}
