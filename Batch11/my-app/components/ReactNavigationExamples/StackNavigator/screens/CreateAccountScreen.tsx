import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {
  navigation: any;
};

const CreateAccountScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text>CreateAccountScreen</Text>
      <Button
        title="Quay lại"
        onPress={() => {
          // go back to HomeScreen
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default CreateAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5b11da',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
