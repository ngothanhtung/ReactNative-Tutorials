import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

type Props = {};
function HeartButton(props: Props) {
  const [status, setStatus] = React.useState(false);

  return (
    <TouchableOpacity
      onPress={() => {
        setStatus((s) => !s);
      }}
    >
      <Icon name='heart' size={16} color={status ? '#FF6C44' : '#898B9A'} />
    </TouchableOpacity>
  );
}

export default HeartButton;
