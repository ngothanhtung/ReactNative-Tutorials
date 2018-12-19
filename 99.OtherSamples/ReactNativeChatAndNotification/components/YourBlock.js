import React from 'react';
import { Text, View } from 'react-native';

const YourBlock = ({ item }) => {
  return (
    <View style={{ flex: 1, marginBottom: 8, marginRight: 30, flexDirection: 'row', justifyContent: 'flex-end' }}>
      <View style={{ justifyContent: 'flex-end', paddingRight: 6 }}>
        <View style={{ padding: 8, borderRadius: 99, backgroundColor: '#636e72' }}>
          {/* <Icon name="account" size={20} color="white" /> */}
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ paddingVertical: 2, paddingLeft: 12 }}>
          <Text style={{ fontSize: 10, color: '#b2bec3' }}>{item.staffName}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderColor: '#dfe6e9',
              borderWidth: 0,
              backgroundColor: '#dfe6e9',
              borderTopLeftRadius: 16,
              borderBottomLeftRadius: 3,
              borderTopRightRadius: 16,
              borderBottomRightRadius: 16,
            }}>
            <View style={{ alignItems: 'flex-start' }}>
              <Text style={{ color: 'black' }}>
                {item.messageText}
              </Text>
              {/* <Text style={{ fontSize: 10, color: '#636e72' }}>{Moment(item.createdTime).format("DD/MM HH:mm")}</Text> */}
            </View>
          </View>
          <View style={{ flex: 1 }}></View>
        </View>
      </View>
    </View>
  );
}

export default YourBlock;