import React from 'react';
import { Button } from 'react-native';

function CustomButton({ handleClick, text }) {
  console.log('Rendering button - ', text);
  return <Button onPress={handleClick} title={text} />;
}
export default React.memo(CustomButton);
