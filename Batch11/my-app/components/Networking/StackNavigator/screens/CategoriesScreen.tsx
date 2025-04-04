import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Categories from '../../components/Categories';

type Props = {
  navigation: any;
};

const CategoriesScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Categories />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
