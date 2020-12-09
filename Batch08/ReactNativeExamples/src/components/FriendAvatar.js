/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Image } from 'react-native';

export default function Avatar() {
  return (
    <View>
      <Image
        style={{ width: 80, height: 80, borderRadius: 60 }}
        source={{
          uri:
            'https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-9/119512811_10160347089269676_557847526290414018_n.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=D8zY675ItbEAX8cC6Mx&_nc_ht=scontent-xsp1-1.xx&oh=36be41b1c380ab72e8a4908bdb52aced&oe=5FD3CB49',
        }}
      />
    </View>
  );
}
