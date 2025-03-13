import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {
  dots: number;
  index: number;
};

const Dots = ({ dots = 3, index }: Props) => {
  // create array from number (dots)
  const dotsArray = Array.from({ length: dots }, (_, i) => i);

  return (
    <View style={styles.dotsContainer}>
      {dotsArray.map((item, dotIndex) => {
        return (
          <View
            key={dotIndex}
            style={[
              styles.dot,
              {
                opacity: index === dotIndex ? 1 : 0.4,
                width: index === dotIndex ? 30 : 10,
              },
            ]}
          ></View>
        );
      })}
    </View>
  );
};

export default Dots;

const styles = StyleSheet.create({
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginTop: 24,
    marginBottom: 24,
  },

  dot: {
    height: 8,
    width: 10,
    borderRadius: 4,
    backgroundColor: '#FF6C44',
    opacity: 0.4,
  },
});
