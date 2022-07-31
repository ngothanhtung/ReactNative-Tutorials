import { View, Text } from 'react-native';
import React from 'react';
import Counter from './components/Counter';
import { SafeAreaView } from 'react-native-safe-area-context';
import Count from '../Session07/UseCallbackHook/components/Count';

type Props = {};

const ComponentToComponent = (props: Props) => {
  const [name, setName] = React.useState('React Native');
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Parent to Child */}
      <Counter
        fontSize={20}
        onPress={(value) => {
          setName('Redux: ' + value);
        }}
      />

      {/* Child to Parent */}
      <Text>{name}</Text>
    </SafeAreaView>
  );
};

export default ComponentToComponent;
