import { View, Text, Button, SafeAreaView } from 'react-native';
import React from 'react';
import * as DocumentPicker from 'expo-document-picker';

type Props = {};

const DocumentPickerExample = (props: Props) => {
  return (
    <SafeAreaView>
      <Button
        title='Open Document'
        onPress={async () => {
          const result = await DocumentPicker.getDocumentAsync();
          console.log(result);
        }}
      />
    </SafeAreaView>
  );
};

export default DocumentPickerExample;
