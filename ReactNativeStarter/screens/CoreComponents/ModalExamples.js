import React, { Component } from 'react';
import { Alert, Modal, Text, TextInput, TouchableHighlight, View } from 'react-native';

export default class ModalExamples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={{ marginTop: 22 }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
        >
          <View
            style={{
              paddingTop: 12, width: '100%', justifyContent: 'center', alignItems: 'center', height: 300, backgroundColor: '#dfe6e9', position: 'absolute', bottom: 0
            }}
          >
            <View style={{ width: '100%', position: 'absolute', top: 0, backgroundColor: '#b2bec3' }}>
              <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'green' }}>
                <View style={{ flex: 1, alignItems: 'flex-start', backgroundColor: 'yellow' }}>
                  <TouchableHighlight
                    style={{
                      height: 32, backgroundColor: '#2c3e50', alignItems: 'center', justifyContent: 'center', width: 60
                    }}
                    onPress={() => { this.setModalVisible(!this.state.modalVisible); }}
                  >
                    <Text style={{ color: '#ffffff' }}>Cancel</Text>
                  </TouchableHighlight>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end', backgroundColor: 'orange' }}>
                  <TouchableHighlight
                    style={{
                      height: 32, backgroundColor: '#2c3e50', alignItems: 'center', justifyContent: 'center', width: 60
                    }}
                    onPress={() => { this.setModalVisible(!this.state.modalVisible); }}
                  >
                    <Text style={{ color: '#ffffff' }}>Select</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>

            <View style={{ top: 32, position: 'absolute', width: '100%', height: '100%' }}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fab1a0' }}>
                <Text>Content here</Text>
              </View>
            </View>


          </View>
        </Modal>
        {/* ----------------------------------------------------------------------------------- */}

        <TextInput
          style={{ height: 48, backgroundColor: '#dfe6e9', paddingLeft: 12, paddingRight: 12 }}
          placeholder="Enter your text"
          underlineColorAndroid="transparent"
          onTouchStart={() => { this.setModalVisible(true); }}
        />
      </View>
    );
  }
}
