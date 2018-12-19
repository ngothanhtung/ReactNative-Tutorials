import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';

export default class Complex extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: 'green' }}>
        <View style={{ flex: 2, backgroundColor: 'pink', height: 100 }}>
          <View style={{ backgroundColor: 'orange', flex: 1 }}>

          </View>
        </View>
        {/* <View style={{ flex: 1, backgroundColor: 'yellow' }}>
          </View>
          <View style={{ flex: 1, backgroundColor: 'pink' }}>
            <View style={{ flex: 1, backgroundColor: 'violet', padding: 30 }}>
              <View style={{ flex: 1, backgroundColor: 'white' }}>

              </View>
            </View>
          </View> */}
        <View style={{ flex: 1, flexDirection:'row', backgroundColor: 'red', padding: 6 }}>
          {[1].map((item, index) => (
            <View style={{flex: 5}} key={index}>
              <TextInput
                placeholder={item.toString()}
                style={{
                  height: 50,
                  borderWidth: 1,
                  borderColor: 'gray',
                  backgroundColor: 'white'
                }} />            
            </View>
            
          ))}
          <View style={{backgroundColor: 'pink'}}>
            <View style={{padding: 12}}>
            <Text>Search</Text>
            </View>
            
          </View>
        </View>
        <View style={{ flex: 2, backgroundColor: 'blue', height: 100 }} />
      </ScrollView>
    );
  }
}
