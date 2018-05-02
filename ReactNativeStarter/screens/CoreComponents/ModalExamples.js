import React, { Component } from 'react';
import { Alert, Modal, Text, TouchableHighlight, View } from 'react-native';

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
      <View style={{ marginTop: 22, height: 250 }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
        >
          <View
            style={{
              marginTop: 22, flex: 1, justifyContent: 'center', alignItems: 'center',
            }}
          >
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                style={{
                  height: 48, backgroundColor: '#2c3e50', justifyContent: 'center', alignItems: 'center', width: 240,
                }}
                onPress={() => { this.setModalVisible(!this.state.modalVisible); }}
              >
                <Text style={{ color: '#ffffff' }}>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          style={{
            height: 48, backgroundColor: '#2c3e50', justifyContent: 'center', alignItems: 'center',
          }}
          onPress={() => { this.setModalVisible(true); }}
        >
          <Text style={{ color: '#ffffff' }}>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
