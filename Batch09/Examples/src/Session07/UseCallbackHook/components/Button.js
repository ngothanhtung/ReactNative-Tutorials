import React from 'react';
import { Button } from 'react-native';

function MyButton({ onPress, title }) {
  console.log('Rendering button - ', title);
  return <Button onPress={onPress} title={title} />;
}

// export default MyButton;

export default React.memo(MyButton);
