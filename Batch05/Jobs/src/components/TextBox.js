import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import colors from '../constants/colors';

class TextBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.value,
    };
  }

  clearText = () => {
    this.setState({ text: '' });
    if (this.props.onChangeText !== undefined) {
      this.props.onChangeText('');
    }
  };

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          borderRadius: 12,
          backgroundColor: '#ecf0f1',
          paddingHorizontal: 12,
          borderColor: this.props.error ? colors.ERROR : '#dfe6e9',
          borderWidth: 0,
        }}>
        <View style={{ justifyContent: 'center' }}>
          <Icon style={{ color: this.props.error ? colors.ERROR : colors.FONT, paddingRight: 8 }} name={this.props.iconName} size={20} />
        </View>
        <View flex={1}>
          <TextInput
            {...this.props}
            placeholderTextColor={this.props.error ? colors.ERROR : 'gray'}
            style={{ height: 42, paddingHorizontal: 8, color: colors.FONT, fontSize: 16 }}
            underlineColorAndroid='transparent'
            value={this.state.text}
            onChangeText={(text) => {
              this.setState({ text: text });
              if (this.props.onChangeText !== undefined) {
                this.props.onChangeText(text);
              }
            }}
          />
        </View>
        <View style={{ justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.clearText}>
            <Ionicons style={{ color: '#b2bec3' }} name='ios-close-circle' size={24} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

TextBox.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  keyboardType: PropTypes.string,
  autoCapitalize: PropTypes.string,
  error: PropTypes.bool,
};

// Specifies the default values for props:
TextBox.defaultProps = {
  value: '',
  placeholder: '',
  keyboardType: 'default',
  autoCapitalize: 'none',
  error: false,
};

export default TextBox;
