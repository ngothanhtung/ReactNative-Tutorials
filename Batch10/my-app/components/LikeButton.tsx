import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {
  isLiked?: boolean;
  color?: string;
  size: number;
  list: string[];
  obj: {
    name: string;
    age: number;
  };
};

// const LikeButton = (
//   props: Props = {
//     color: 'red',
//     isLiked: false,
//     size: 10,
//     list: [],
//     obj: {
//       name: '',
//       age: 0,
//     },
//   },
// ) => {
//   return (
//     <View style={{ color: props.color }}>
//       <Text>LikeButton</Text>
//     </View>
//   );
// };

const LikeButton = ({ color = 'red', isLiked = false, size, list, obj }: Props) => {
  return (
    <View>
      <Text style={{ color: color }}></Text>
    </View>
  );
};

export default LikeButton;

const styles = StyleSheet.create({});
