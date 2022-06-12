import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign as Icon } from '@expo/vector-icons';

type Props = {};

const LikeButton = (props: Props) => {
  // State: Khỏi tạo state
  const [like, setLike] = React.useState(false);

  return (
    <TouchableOpacity
      onPress={() => {
        // Update state with new value
        // Recommended
        setLike((previousLike) => !previousLike);

        // Not recommended
        // setLike(!like)
      }}
    >
      {like && <Icon name='like1' size={24} />}
      {!like && <Icon name='like2' size={24} />}
    </TouchableOpacity>
  );
};

export default LikeButton;
