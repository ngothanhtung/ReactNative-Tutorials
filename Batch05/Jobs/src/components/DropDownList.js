import React, { Component } from 'react';
import { View, Text, Picker, Platform, TouchableOpacity, ActionSheetIOS } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import colors from '../constants/colors';
import _ from 'lodash';

class DropDownList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // text: props.selectedItem ? props.selectedItem.text : props.items[0].text,
      // value: props.selectedItem ? props.selectedItem.value : props.items[0].value,
      value: props.value === '' ? props.items[0].value : props.value,
    };
  }
  render() {
    const selectedItem = _.find(this.props.items, (x) => {
      return x.value === this.state.value;
    });

    return (
      <View
        style={{
          flexDirection: 'row',
          borderRadius: 12,
          backgroundColor: '#ecf0f1',
          paddingHorizontal: 12,
          borderColor: '#dfe6e9',
          borderWidth: 0,
        }}>
        <View style={{ justifyContent: 'center' }}>
          <Icon style={{ color: colors.FONT }} name={this.props.iconName} size={20} />
        </View>
        <View flex={1}>
          {Platform.OS === 'ios' && (
            <TouchableOpacity
              style={{
                height: 42,
                flexDirection: 'row',
                borderRadius: 12,
                backgroundColor: '#ecf0f1',
                paddingHorizontal: 12,
                borderColor: this.props.error ? colors.redColor : '#dfe6e9',
                borderWidth: 0,
              }}
              onPress={() => {
                ActionSheetIOS.showActionSheetWithOptions(
                  {
                    options: ['Đóng', ...this.props.items.map((item) => item.text)],
                    cancelButtonIndex: 0,
                  },
                  (buttonIndex) => {
                    if (buttonIndex > 0) {
                      const selectedItem = this.props.items[buttonIndex - 1];
                      this.setState({ value: selectedItem.value });
                      this.props.onValueChange(selectedItem.value);
                    }
                  },
                );
              }}>
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text>{selectedItem.text}</Text>
              </View>
              <View style={{ justifyContent: 'center' }}>
                <Icon style={{ color: colors.FONT }} name='chevron-down' size={20} />
              </View>
            </TouchableOpacity>
          )}
          {Platform.OS === 'android' && (
            <Picker
              style={{ padding: 0, height: 42 }}
              mode={'dialog'}
              selectedValue={this.state.value}
              onValueChange={(itemValue) => {
                this.setState({ value: itemValue });
                this.props.onValueChange(itemValue);
              }}
              children={this.props.items.map((item, index) => (
                <Picker.Item key={index} label={item.text} value={item.value} />
              ))}
            />
          )}
        </View>
      </View>
    );
  }
}

DropDownList.propTypes = {
  value: PropTypes.string,
  onValueChange: PropTypes.func.isRequired,
};

// Specifies the default values for props:
DropDownList.defaultProps = {
  value: '',
};

export default DropDownList;
