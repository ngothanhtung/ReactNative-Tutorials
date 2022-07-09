import React from 'react';
import { Text, View, Switch, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  saveMeText: {
    marginLeft: 4,
    fontFamily: 'SVN-Gilroy-Regular',
    color: '#898B9A',
  },
});

type Props = {
  title: string;
};

export default function SwitchButton({ title }: Props) {
  const [value, setValue] = React.useState(false);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: '#898B9A', true: '#FF6C44' }}
        ios_backgroundColor='#898B9A'
        thumbColor='#ffffff'
        onValueChange={() => {
          setValue((v) => !v);
        }}
        value={value}
      />
      <Text style={styles.saveMeText}>{title}</Text>
    </View>
  );
}
