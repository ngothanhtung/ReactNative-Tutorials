import React, { Component } from 'react';
import { Platform, Modal, Text, TouchableHighlight, View } from 'react-native';
import PropTypes from 'prop-types';

class TextInputWithModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      selectedValue: '',
    };
  }

  onPressSelectButton() {
    // HARD VALUE
    const value = 'This is value';
    this.setState({ selectedValue: value });
    this.props.onSelect(value);

    // (value) => { this.setState({ text: value }) }
    // CLOSE MODAL
    this.setState({ modalVisible: false });
  }

  clearText() {
    this.setState({ selectedValue: '' });
    this.props.onSelect('');
    this.hideModal();
  }

  hideModal() {
    this.setState({ modalVisible: false });
  }

  showModal() {
    this.setState({ modalVisible: true });
  }

  render() {
    return (
      <View style={{ marginTop: 22 }}>
        <Modal
          animationType="slide"
          transparent
          visible={this.state.modalVisible}
          onRequestClose={() => {
            // ANDROID: WHEN HARDWARE BACK BUTTON WAS PRESSED
            this.setState({ modalVisible: false });
          }}
        >
          <View style={{ paddingTop: 12, width: '100%', justifyContent: 'center', alignItems: 'center', height: 300, backgroundColor: '#dfe6e9', position: 'absolute', bottom: 0 }} >
            <View style={{
              width: '100%', position: 'absolute', top: 0, backgroundColor: '#b2bec3',
            }}
            >
              <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'green' }}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start', backgroundColor: 'yellow' }}>
                  {/* CANCEL BUTTON */}
                  {
                    Platform.OS === 'ios' &&
                    <View>
                      <TouchableHighlight
                        style={{
                          height: 40, backgroundColor: '#2c3e50', alignItems: 'center', justifyContent: 'center', width: 60
                        }}
                        onPress={() => { this.hideModal(); }}
                      >
                        <Text style={{ color: '#ffffff' }}>Cancel</Text>
                      </TouchableHighlight>

                      <View style={{ width: 1 }} />
                    </View>
                  }


                  {/* CLEAR BUTTON */}
                  <TouchableHighlight
                    style={{
                      height: 40, backgroundColor: '#2c3e50', alignItems: 'center', justifyContent: 'center', width: 60
                    }}
                    onPress={() => { this.clearText(); }}
                  >
                    <Text style={{ color: '#ffffff' }}>Clear</Text>
                  </TouchableHighlight>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end', backgroundColor: 'orange' }}>
                  <TouchableHighlight
                    style={{
                      height: 40, backgroundColor: '#2c3e50', alignItems: 'center', justifyContent: 'center', width: 60
                    }}
                    onPress={() => { this.onPressSelectButton(); }}
                  >
                    <Text style={{ color: '#ffffff' }}>Select</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>

            <View style={{ top: 40, position: 'absolute', width: '100%', height: '100%' }}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fab1a0' }}>
                <Text>Content here</Text>
              </View>
            </View>
          </View>
        </Modal>
        {/* ----------------------------------------------------------------------------------- */}

        <TouchableHighlight onPress={() => { this.showModal(); }} style={{ alignItems: 'flex-start', justifyContent: 'center', height: 48, backgroundColor: '#dfe6e9', paddingLeft: 12, paddingRight: 12, color: '#000000' }}>
          <Text
            style={{ color: '#000000' }}
          >
            {
              this.state.selectedValue
            }
          </Text>
          {/* <TextInput
            style={{ height: 48, backgroundColor: '#dfe6e9', paddingLeft: 12, paddingRight: 12, color: '#000000' }}
            placeholder="Enter your text"
            underlineColorAndroid="transparent"
            editable={false}
            value={this.state.selectedValue}
          /> */}
        </TouchableHighlight>
      </View>
    );
  }
}

TextInputWithModal.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default class ModalExamples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TextInputWithModal onSelect={(value) => { this.setState({ text: value }); }} />
        <Text>
          {this.state.text}
        </Text>
      </View>
    );
  }
}
