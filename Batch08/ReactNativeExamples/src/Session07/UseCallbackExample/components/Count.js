import React from 'react';
import { Text } from 'react-native';

// Not use memo
// function Count({ text, count }) {
//   console.log(`Rendering ${text}`);
//   return (
//     <Text>
//       {text} - {count}
//     </Text>
//   );
// }
// export default Count;

// Use memo
function Count({ text, count }) {
  console.log(`Rendering ${text}`);
  return (
    <Text>
      {text} - {count}
    </Text>
  );
}

export default React.memo(Count);
