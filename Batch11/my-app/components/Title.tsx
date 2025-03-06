import { View, Text } from 'react-native';
import React from 'react';

type Props = {
  name: string; // Bắt buộc truyền vào props name
  color?: string; // Không bắt buộc truyền vào props color
  size?: number; // Không bắt buộc truyền vào props size
  isItalic?: boolean; // Không bắt buộc truyền vào props isItalic
  isBold?: boolean; // Không bắt buộc truyền vào props isBold
};

const Title = ({ name, color = 'black', size = 16, isItalic = false, isBold = false }: Props) => {
  return (
    <View>
      <Text style={{ color: color, fontSize: size, fontStyle: isItalic ? 'italic' : 'normal', fontWeight: isBold ? '700' : '400' }}>Hello {name}!</Text>
    </View>
  );
};

export default Title;
