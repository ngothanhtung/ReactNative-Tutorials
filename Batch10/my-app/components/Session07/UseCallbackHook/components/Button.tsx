import React from 'react';
import { Button } from 'react-native';

type Props = {
  onPress: () => void;
  title: string;
};

function MyButton({ onPress, title }: Props) {
  console.log('Rendering button - ', title);
  return <Button onPress={onPress} title={title} />;
}

// export default MyButton;

export default React.memo(MyButton);
