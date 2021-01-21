import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';

function CheckBox({ id, onSelected }) {
  const [checked, setChecked] = React.useState(false);
  return (
    <View style={{ flexDirection: 'row', height: 54, alignItems: 'center' }}>
      <View flex={1}>
        <Text>{checked ? 'CHECKED' : 'UNCHECKED'}</Text>
      </View>

      <Button
        onPress={() => {
          let c = !checked;
          setChecked(c);
          onSelected({ id: id, checked: c });
        }}>
        Select
      </Button>
    </View>
  );
}

export default function SelectionScreen() {
  return (
    <SafeAreaView>
      <CheckBox
        id="1"
        onSelected={({ id, checked }) => {
          console.log({ id, checked });
        }}
      />
      <CheckBox
        id="2"
        onSelected={({ id, checked }) => {
          console.log({ id, checked });
        }}
      />
      <CheckBox
        id="3"
        onSelected={({ id, checked }) => {
          console.log({ id, checked });
        }}
      />
      <CheckBox
        id="4"
        onSelected={({ id, checked }) => {
          console.log({ id, checked });
        }}
      />
    </SafeAreaView>
  );
}
