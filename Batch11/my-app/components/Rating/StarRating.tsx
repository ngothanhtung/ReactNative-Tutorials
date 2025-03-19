import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
type Props = {};

const starRating = [1, 2, 3, 4, 5];

const StarRating = (props: Props) => {
  const [numberOfStars, setNumberOfStars] = React.useState(5);

  return (
    <View style={styles.container}>
      {starRating.map((item) => (
        <AntDesign
          key={item}
          name='star'
          size={32}
          color={item <= numberOfStars ? '#ffa113' : '#C0C0C0'}
          onPress={() => {
            console.log('item', item);
            setNumberOfStars(item);
          }}
        />
      ))}
    </View>
  );
};

export default StarRating;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
