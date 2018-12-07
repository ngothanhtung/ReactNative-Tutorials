import React from 'react';
import { Text, View } from 'react-native';

const MyBlock = ({ item }) => {
  return (
    <View style={{ marginBottom: 8, marginLeft: 30, marginRight: 0, flexDirection: 'row' }}>
      <View style={{ flex: 1 }}>
      </View>
      <View>
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderColor: '#0984e3',
            borderWidth: 0,
            backgroundColor: '#0984e3',
            borderTopLeftRadius: 16,
            borderBottomLeftRadius: 16,
            borderTopRightRadius: 16,
            borderBottomRightRadius: 3,
          }}>

          {/* DESCRIPTION */}
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Text style={{ color: 'white' }}>
              {item.messageText}
            </Text>
            {/* <Text style={{ fontSize: 10, color: '#dfe6e9' }}>{Moment(item.createdTime).format("DD/MM HH:mm")}</Text> */}
          </View>
        </View>
      </View>
    </View>
  );
}

export default MyBlock;