import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';

export default class StyleExample2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'yellow' }}>
        <View style={{ height: 24, backgroundColor: 'white' }}></View>
        <View style={{ height: 60, backgroundColor: 'violet', flexDirection: 'row' }}>
          <View style={{ width: 60, height: 60, backgroundColor: 'yellow' }}></View>
          <View style={{ flex: 1, justifyContent: 'flex-end', padding: 8 }}>
            <Text>Lorem Ipsum is simply</Text>
          </View>
          <View style={{ width: 60, height: 60, backgroundColor: 'yellow' }}></View>
        </View>
        <ScrollView style={{ flex: 1, backgroundColor: '#ecf0f1' }}>
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
              <View key={index}>
                <View style={{ height: 80, flexDirection: 'row' }}>
                  <View style={{ height: 80, width: 80, opacity: (index + 2) * 0.15, backgroundColor: '#8e44ad', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ height: 48, width: 48, backgroundColor: 'white', borderRadius: 24 }}></View>
                  </View>
                  <View style={{ height: 80, flex: 1, opacity: (index + 2) * 0.15, backgroundColor: '#27ae60' }}>
                    <View style={{flex:1, backgroundColor: 'red', justifyContent: 'center', padding: 8 }}>
                      <Text>Lorem Ipsum is simply</Text>
                    </View>
                    <View style={{flex:2, backgroundColor: 'orange', paddingLeft: 8}}>                      
                      <Text>Lorem Ipsum is simply dummy text of the printing</Text>
                    </View>
                  
                  </View>
                  <View style={{ height: 80, width: 80, opacity: (index + 2) * 0.15, backgroundColor: '#2c3e50', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ height: 36, width: 36, backgroundColor: 'white', borderRadius: 24 }}></View>
                  </View>
                </View>
                {/* ------------------------------------------------------------------ */}
                <View style={{ height: 1 }}></View>
              </View>
            ))
          }
        </ScrollView>
        <View style={{ height: 60, flexDirection: 'row' }}>
          <View style={{ flex: 1, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ height: 48, width: 48, backgroundColor: 'white', borderRadius: 24 }}></View>
          </View>
          <View style={{ flex: 1, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ height: 48, width: 48, backgroundColor: 'white', borderRadius: 24 }}></View>
          </View>
          <View style={{ flex: 1, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ height: 48, width: 48, backgroundColor: 'white', borderRadius: 24 }}></View>
          </View>
          <View style={{ flex: 1, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ height: 48, width: 48, backgroundColor: 'white', borderRadius: 24 }}></View>
          </View>
        </View>
      </View>
    );
  }
}
