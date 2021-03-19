/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import propTypes from 'prop-types';
import { View, SafeAreaView } from 'react-native';
import { Appbar } from 'react-native-paper';

import { useNavigation, useRoute } from '@react-navigation/native';
import Loading from './Loading';
import colors from '../constants/colors';

const Container = ({ ready, title, showAppbar, showBackButton, showActionButton, actionButton, style, children }) => {
  const navigation = useNavigation();
  // const route = useRoute();
  // console.log(route);
  return (
    <View flex={1} style={{ backgroundColor: colors.SLL_PRIMARY }}>
      {showAppbar && (
        <Appbar.Header dark>
          {showBackButton && (
            <Appbar.BackAction
              onPress={() => {
                navigation.goBack();
              }}
            />
          )}
          <Appbar.Content title={title} style={{ alignItems: 'center' }} />
          {showActionButton && <Appbar.Action onPress={() => {}} icon={actionButton.icon} />}
        </Appbar.Header>
      )}
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={[
            {
              flex: 1,
              borderRadius: 0,
              backgroundColor: colors.BACKGROUND,
            },
            style,
          ]}>
          {!ready && <Loading />}
          <View style={{ flex: 1, display: ready ? 'flex' : 'none' }}>{children}</View>
        </View>
      </SafeAreaView>
    </View>
  );
};

Container.defaultProps = {
  style: {},
  title: 'TITLE',
  showAppbar: false,
  showBackButton: false,
  showMenuButton: false,
  ready: true,
  children: null,
};

Container.propTypes = {
  ready: propTypes.bool,
  title: propTypes.string,
  showAppbar: propTypes.bool,
  showActionButton: propTypes.bool,
  style: propTypes.oneOfType([propTypes.object, propTypes.array]),
  children: propTypes.instanceOf(Object),
};

export default React.memo(Container);
