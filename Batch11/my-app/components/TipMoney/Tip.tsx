import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
type Props = {};

const items = [
  {
    text: 'No Tips',
    money: 0,
  },
  {
    text: '$5',
    money: 5,
  },
  {
    text: '$10',
    money: 10,
  },
  {
    text: '$15',
    money: 15,
  },
  {
    text: '$20',
    money: 20,
  },
];

const Tip = (props: Props) => {
  const [money, setMoney] = React.useState(0);

  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <Pressable
          key={index}
          style={[
            styles.button,
            {
              backgroundColor: item.money === money ? '#ff6c44' : '#fff',
              borderColor: item.money === money ? '#ff6c44' : '#BBBDC1',
              borderWidth: 1,
            },
          ]}
          onPress={() => {
            setMoney(item.money);
          }}
        >
          <Text
            style={[
              styles.text,
              {
                color: item.money === money ? '#fff' : '#BBBDC1',
              },
            ]}
          >
            {item.text}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default Tip;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    paddingHorizontal: 14,
    height: 31,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff6c44',
    borderRadius: 8,
  },

  text: {
    color: '#fff',
  },
});
