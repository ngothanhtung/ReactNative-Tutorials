import React from 'react';
import { Text } from 'react-native';

type Props = {
  children: string;
};

export default function BigText({ children }: Props) {
  return <Text style={{ fontFamily: 'Poppins-SemiBold', color: 'white', fontSize: 40, lineHeight: 48 }}>{children}</Text>;
}
