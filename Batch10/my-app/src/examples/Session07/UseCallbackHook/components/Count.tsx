import React from 'react';
import { Text } from 'react-native';

type Props = {
  text: string;
  count: number;
};

function Count({ text, count }: Props) {
  console.log(`Render Count: ${text}`);
  return (
    <Text>
      {text} - {count}
    </Text>
  );
}

// export default Count;

export default React.memo(Count);
