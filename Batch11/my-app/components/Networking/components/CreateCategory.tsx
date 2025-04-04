import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import apiClient from '../apiClient';
import { useNavigation } from '@react-navigation/native';

type Props = {};

const CreateCategory = (props: Props) => {
  const navigation = useNavigation();
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  // Login
  const onSubmit = async () => {
    // Gọi API login
    try {
      const response = await apiClient.post('/online-shop/categories', {
        name,
        description,
      });

      // Navigate to Categories screen
      // Go back
      navigation.goBack();
      // Reset form
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Create new category</Text>
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

export default CreateCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
