import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Categories from '../../components/Categories';
import UpdateCategory from '../../components/UpdateCategory';

type Props = {
  navigation: any;
  route: any;
};

const UpdateCategoryScreen = ({ route, navigation }: Props) => {
  console.log('UpdateCategoryScreen', route.params.category);
  return (
    <View style={styles.container}>
      <UpdateCategory category={route.params.category} />
    </View>
  );
};

export default UpdateCategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
