import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import apiClient from '../apiClient';
import { useNavigation } from '@react-navigation/native';

type Props = {
  category?: any;
};

const UpdateCategory = ({ category }: Props) => {
  const navigation = useNavigation();

  const [name, setName] = React.useState(category.name);
  const [description, setDescription] = React.useState(category.description);

  // Login
  const onSubmit = async () => {
    // Gọi API login
    try {
      const response = await apiClient.patch('/online-shop/categories/ ' + category.id, {
        name,
        description,
      });

      // Go back
      navigation.goBack();
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Update exists category</Text>
      <TextInput
        placeholder="Name"
        autoCorrect={false}
        onChangeText={(text) => setName(text)}
        value={name}
        style={{
          borderWidth: 1,
          width: '80%',
          padding: 10,
          marginBottom: 10,
        }}
      />
      <TextInput
        placeholder="Description"
        autoCorrect={false}
        onChangeText={(text) => setDescription(text)}
        value={description}
        style={{
          borderWidth: 1,
          width: '80%',
          padding: 10,
          marginBottom: 10,
        }}
      />
      <Button title="Save" onPress={onSubmit} />
    </View>
  );
};

export default UpdateCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
