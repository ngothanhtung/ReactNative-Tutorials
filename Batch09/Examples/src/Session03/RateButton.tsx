import { View, Text } from 'react-native';
import React from 'react';
import { AntDesign as Icon } from '@expo/vector-icons';

type Props = {};

const RateButton = (props: Props) => {
  const [count, setCount] = React.useState(0);

  const stars = [1, 2, 3, 4, 5];
  return (
    <View style={{ flexDirection: 'row' }}>
      {stars.map((item, index) => {
        let starName = 'staro';
        if (item <= count) {
          starName = 'star';
        }
        return (
          <Icon
            key={item}
            name={starName}
            size={24}
            color='orange'
            onPress={() => {
              // update state
              if (item === count) {
                setCount(0);
              } else {
                setCount((c) => item);
              }
            }}
          />
        );
      })}
    </View>
  );
};

export default RateButton;
