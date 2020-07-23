/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import numeral from 'numeral';

import {Avatar, Card, Chip, TouchableRipple} from 'react-native-paper';
import colors from '../../../../constants/colors';

function Vendor({vendor}) {
  const navigation = useNavigation();

  return (
    <TouchableRipple
      style={{margin: 12}}
      rippleColor={colors.WHITE}
      onPress={() => {}}>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.WHITE,
          borderRadius: 12,
          paddingBottom: 24,
        }}>
        {/* {vendor.imageUrl && <Card.Cover style={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }} source={{ uri: vendor.imageUrl }} />} */}
        <Card.Title
          title={vendor.name}
          subtitle={`${vendor.vendorType}, khoảng cách ${numeral(
            vendor.distance / 1000,
          ).format('0,0.00')} Km`}
          titleStyle={{
            fontSize: 16,
            fontWeight: '700',
            color: colors.PRIMARY_FONT,
            textTransform: 'uppercase',
          }}
          left={(props) => (
            <Avatar.Image {...props} source={{uri: vendor.pictureUrl}} />
          )}
        />
        <Card.Content>
          {/* PHONE */}
          <View style={{flexDirection: 'row', marginVertical: 3}}>
            <Chip
              mode="flat"
              style={{backgroundColor: colors.LIGHT_GRAY, flex: 1}}
              icon="phone">
              <Text>{vendor.phone}</Text>
            </Chip>
          </View>
          {/* EMAIL */}
          <View style={{flexDirection: 'row', marginVertical: 3}}>
            <Chip
              mode="flat"
              style={{backgroundColor: colors.LIGHT_GRAY, flex: 1}}
              icon="email">
              <Text>{vendor.email}</Text>
            </Chip>
          </View>
          {/* PRICE */}
          <View style={{flexDirection: 'row', marginVertical: 3}}>
            <Chip
              mode="flat"
              style={{backgroundColor: colors.LIGHT_GRAY, flex: 1}}
              icon="currency-usd">
              <Text>{numeral(vendor.minPrice).format('0,0')}</Text>
              <Text> - </Text>
              <Text>{`${numeral(vendor.maxPrice).format('0,0')} VNĐ`}</Text>
            </Chip>
          </View>
        </Card.Content>
      </View>
    </TouchableRipple>
  );
}

Vendor.propTypes = {
  vendor: PropTypes.object.isRequired,
};
Vendor.defaultProps = {};

export default Vendor;
