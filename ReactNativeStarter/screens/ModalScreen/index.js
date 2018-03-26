import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, ActionSheetIOS } from 'react-native';

export default class ModalScreen extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={{ marginTop: 22 }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{ marginTop: 22 }}>
            <View>              
              <TouchableHighlight
                onPress={() => {
                  //this.setModalVisible(!this.state.modalVisible);
                  ActionSheetIOS.showActionSheetWithOptions({
                    options: ['Cancel', 'Remove'],
                    destructiveButtonIndex: 1,
                    cancelButtonIndex: 0,
                  },
                  (buttonIndex) => {
                    if (buttonIndex === 1) { /* destructive action */ }
                  });
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}