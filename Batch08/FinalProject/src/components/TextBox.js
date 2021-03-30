/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import propTypes from 'prop-types';
import { View, Text, Alert } from 'react-native';
import { useTheme } from 'react-native-paper';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useField } from 'formik';
import colors from '../constants/colors';

const TextBox = ({ loading, ...props }) => {
  // HOOKS
  const paperColors = useTheme().colors;
  const [inputIsFocused, setInputIsFocused] = React.useState(false);
  const [field, meta, helpers] = useField(props);
  const { containerStyle, inputContainerStyle, onBlur, label, iconName, required } = props;

  return (
    <View>
      {label && (
        <View style={{ padding: 8 }}>
          <Text
            style={{
              fontWeight: '700',
              color: required ? paperColors.primary : colors.PRIMARY_FONT,
            }}>
            {label}
          </Text>
        </View>
      )}
      <View
        style={[
          {
            borderRadius: 4,
            backgroundColor: colors.WHITE,
            borderColor: paperColors.primary,
            borderWidth: 1,
          },
          containerStyle,
        ]}>
        <Input
          nane={field.name}
          {...props}
          label={null}
          placeholderTextColor={colors.DARK_GRAY}
          inputStyle={{
            color: inputIsFocused ? paperColors.primary : colors.PRIMARY_FONT,
            fontSize: 14,
          }}
          inputContainerStyle={[
            {
              height: 42,
              borderBottomWidth: 0,
              borderColor: paperColors.primary,
            },
            inputContainerStyle,
          ]}
          underlineColorAndroid="transparent"
          leftIcon={<Icon name={iconName} size={24} color={inputIsFocused ? paperColors.primary : colors.PRIMARY_ICON} />}
          leftIconContainerStyle={{ marginLeft: 2, marginRight: 8 }}
          rightIcon={
            <Icon
              name="alert-circle"
              size={24}
              color={meta.error ? colors.DARK_RED : 'transparent'}
              onPress={() => {
                Alert.alert('Thông báo', meta.error);
              }}
            />
          }
          onFocus={() => {
            setInputIsFocused(true);
            helpers.setTouched(true);
          }}
          onBlur={() => {
            setInputIsFocused(false);
            onBlur();
          }}
        />
      </View>
    </View>
  );
};

TextBox.propTypes = {
  containerStyle: propTypes.oneOfType([propTypes.object, propTypes.array]),
  inputContainerStyle: propTypes.oneOfType([propTypes.object, propTypes.array]),
  iconName: propTypes.string,
};

TextBox.defaultProps = {
  iconName: 'keyboard',
  containerStyle: {},
  inputContainerStyle: {},
};

export default TextBox;
