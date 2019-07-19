import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import colors from '../constants/colors';

export default class SearchBar extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
    onChangeText: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  clearText = () => {
    this.setState({ text: '' });
    if (this.props.onClearText !== undefined) {
      this.props.onClearText();
    }
  };

  render() {
    return (
      <View style={{ flexDirection: 'row', borderRadius: 12, backgroundColor: '#ecf0f1', paddingHorizontal: 12, borderColor: '#dfe6e9', borderWidth: 0 }}>
        <View style={{ justifyContent: 'center' }}>
          <Icon style={{ color: colors.fontColor }} name='search' size={20} />
        </View>
        <View flex={1}>
          <TextInput
            autoCorrect={false}
            autoCapitalize='none'
            placeholder='Tìm kiếm'
            clearTextOnFocus={true}
            returnKeyType='search'
            returnKeyLabel='Search'
            style={{ height: 42, padding: 8, color: colors.fontColor }}
            underlineColorAndroid='transparent'
            value={this.state.text}
            onChangeText={(text) => {
              this.setState({ text: text });
              if (this.props.onChangeText !== undefined) {
                this.props.onChangeText(text);
              }
            }}
            onSubmitEditing={() => {
              if (this.props.onSearch !== undefined) {
                this.props.onSearch(this.state.text);
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
