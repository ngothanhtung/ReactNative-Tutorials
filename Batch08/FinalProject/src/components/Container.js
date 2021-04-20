/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import propTypes from 'prop-types';
import { View, SafeAreaView } from 'react-native';

import { Appbar, Button, Divider, Drawer, Menu } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';
import Loading from './Loading';
import colors from '../constants/colors';

const Container = ({ ready, title, subTitle, showAppbar, showHomeButton, showBackButton, showSearchButton, onSearch, style, children }) => {
  const navigation = useNavigation();
  // const route = useRoute();
  // console.log(route);
  return (
    <View flex={1} style={{ backgroundColor: colors.BACKGROUND }}>
      {showAppbar && (
        <Appbar.Header dark>
          {showHomeButton && <Appbar.Action icon="home" onPress={() => navigation.navigate('SLL_Parent_TabNavigator')} />}
          {showBackButton && (
            <Appbar.BackAction
              onPress={() => {
                navigation.goBack();
              }}
            />
          )}
          <Appbar.Content title={title} subtitle={subTitle} titleStyle={{ fontFamily: 'Roboto-Medium' }} subtitleStyle={{ fontFamily: 'Roboto-Regular' }} />
          {showSearchButton && (
            <Appbar.Action
              icon="magnify"
              onPress={() => {
                if (typeof onSearch === 'function') {
                  onSearch();
                }
              }}
            />
          )}
          <Appbar.Action
            onPress={() => {
              navigation.openDrawer();
            }}
            icon="dots-vertical"
          />
        </Appbar.Header>
      )}

      <SafeAreaView style={{ flex: 1 }}>
        <View style={[{ flex: 1, borderRadius: 0, backgroundColor: colors.BACKGROUND }, style]}>
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
  subTitle: '',
  showAppbar: false,
  showBackButton: false,
  showMenuButton: false,
  actionButton: {
    icon: 'dots-vertical',
  },
  ready: true,
  children: null,
};

Container.propTypes = {
  ready: propTypes.bool,
  title: propTypes.string,
  subTitle: propTypes.string,
  showAppbar: propTypes.bool,
  showActionButton: propTypes.bool,
  actionButton: propTypes.shape({
    icon: propTypes.string,
  }),
  style: propTypes.oneOfType([propTypes.object, propTypes.array]),
  children: propTypes.instanceOf(Object),
};

export default React.memo(Container);
