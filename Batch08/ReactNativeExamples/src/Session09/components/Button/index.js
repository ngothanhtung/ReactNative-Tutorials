import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

export default function Button({ title, onPress, style, titleStyle, iconName, iconStyle, icon, disabled, loading }) {
  const TouchComponent = disabled ? View : TouchableOpacity;
  return (
    <TouchComponent
      onPress={() => {
        // Code here ...
        if (disabled) return;

        onPress();
      }}
      style={[styles.defaultStyle, style, disabled ? styles.defaultDisabledStyle : null]}>
      {!loading && iconName && <Icon style={[styles.defaultIconStyle, iconStyle]} name={iconName} size={24} />}
      {!loading && icon}
      {loading && <ActivityIndicator style={{ marginRight: 8 }} />}
      <Text style={[styles.defaultTitleStyle, titleStyle]}>{title}</Text>
    </TouchComponent>
  );
}
