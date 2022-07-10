import React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },

  selectedBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    height: 40,
    width: 40,
    borderRadius: 8,
    backgroundColor: '#FF6C44',
  },

  selectedText: {
    color: '#ffffff',
  },

  box: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    borderColor: '#BBBDC1',
    borderWidth: 1,
    height: 40,
    width: 40,
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },

  text: {
    color: '#BBBDC1',
  },
});

type Props = {
  sizes: [];
};

export default function SizeBox(props: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <View style={styles.container}>
      {props.sizes.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={selectedIndex === index ? styles.selectedBox : styles.box}
            onPress={() => {
              setSelectedIndex(index);
            }}
          >
            <Text style={selectedIndex === index ? styles.selectedText : styles.text}>{item}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
