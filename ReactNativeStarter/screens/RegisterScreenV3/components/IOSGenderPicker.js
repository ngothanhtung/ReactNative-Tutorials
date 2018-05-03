import React, { Component } from 'react';
import { Modal, View, Text, Picker } from 'react-native';

export default class IOSGenderPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      value: '',
    }
  }

  hideModal = () => {
    this.setState({ modalVisible: false });
  }

  showModal = () => {
    this.setState({ modalVisible: true });
  }

  render() {
    return (
      <View style={{ marginTop: 22 }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
        >
          <View
            style={{
              position: 'absolute',
              width: '100%',
              height: 240,
              bottom: 0,
              backgroundColor: '#dfe6e9'
            }}
          >
            <Picker
              selectedValue={this.state.value}
              onValueChange={(itemValue, itemPosition) => {
                this.setState({ value: itemValue });
                this.props.onSelect(itemValue);
                this.hideModal();
              }}
            >
              <Picker.Item label="[ Select gender ]" value="" />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
            </Picker>
          </View>
        </Modal>
        {/* ----------------------------------------------------------------------------------- */}
        <View style={{ alignItems: 'flex-start', justifyContent: 'center', height: 48, backgroundColor: '#dfe6e9', paddingLeft: 12, paddingRight: 12, color: '#000000' }}>
          <Text
            onPress={this.showModal}
            style={{ width: '100%', color: '#000000', paddingVertical: 10 }}
          >
            {
              this.state.value
            }
          </Text>
        </View>
      </View>
    );
  }
}