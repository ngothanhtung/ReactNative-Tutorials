import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import Fonts from '../../constants/fonts';

type Props = {
  onPress?: (value: boolean) => void;
};

const SaveMeToogle = ({ onPress }: Props) => {
  const [isEnabled, setIsEnabled] = React.useState(false);

  // console.log('value', isEnabled);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.toogleContainer}
        onPress={() => {
          setIsEnabled((x) => !x);

          // if (onPress) {
          //   onPress(!isEnabled);
          // }
          onPress && onPress(!isEnabled);
        }}
      >
        <View
          style={[
            styles.toogle,
            {
              paddingLeft: isEnabled ? 18 : 4,
              backgroundColor: isEnabled ? '#FF6C44' : '#FFFFFF',
              borderColor: isEnabled ? '#FF6C44' : '#898B9A',
            },
          ]}
        >
          <View style={[styles.dot, { backgroundColor: isEnabled ? '#FFFFFF' : '#898B9A' }]} />
        </View>
        <Text style={[styles.text, { color: isEnabled ? '#FF6C44' : '#898B9A' }]}>Save Me</Text>
      </Pressable>
    </View>
  );
};

export default SaveMeToogle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  toogleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5,
  },

  toogle: {
    borderColor: '#898B9A',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
    height: 16,
    width: 32,
    justifyContent: 'center',
    paddingLeft: 4, // Thay đổi 4 <=> 18
  },

  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#898B9A',
  },

  text: {
    fontFamily: Fonts.GilroyMedium,
    color: '#898B9A',
  },
});
