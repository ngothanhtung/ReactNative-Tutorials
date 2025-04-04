import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CreateCategory from '../../components/CreateCategory';

type Props = {
  navigation: any;
};

const CreateCategoryScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <CreateCategory />
    </View>
  );
};

export default CreateCategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
