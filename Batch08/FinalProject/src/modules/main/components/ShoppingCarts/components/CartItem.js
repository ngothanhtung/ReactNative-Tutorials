/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Card, Chip, TouchableRipple, Subheading } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import numeral from 'numeral';
import moment from 'moment';

import colors from '../../../../../constants/colors';
import { increaseCartAction, decreaseCartAction, removeFromCartAction } from '../../../actions';

const DecreaseButton = ({ onPress }) => (
  <TouchableRipple
    style={{ height: 24, width: 24, backgroundColor: colors.YOPA_CHIP_BACKGROUND, justifyContent: 'center', alignItems: 'center', borderRadius: 16 }}
    onPress={onPress}>
    <Icon name="minus-circle" type="font-awesome" color={colors.PRIMARY} size={16} />
  </TouchableRipple>
);

const IncreaseButton = ({ onPress }) => (
  <TouchableRipple
    style={{ height: 24, width: 24, backgroundColor: colors.YOPA_CHIP_BACKGROUND, justifyContent: 'center', alignItems: 'center', borderRadius: 16 }}
    onPress={onPress}>
    <Icon name="plus-circle" type="font-awesome" color={colors.PRIMARY} size={16} />
  </TouchableRipple>
);

const DeleteIconButton = ({ onPress }) => (
  <TouchableRipple
    style={{ height: 24, width: 24, backgroundColor: colors.YOPA_CHIP_BACKGROUND, justifyContent: 'center', alignItems: 'center', borderRadius: 16 }}
    onPress={onPress}>
    <Icon name="cart-remove" type="material-community" color={colors.DARK_RED} size={16} />
  </TouchableRipple>
);

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { service } = item;

  let sum = numeral((item.quantity * item.service.price * (100 - item.service.discount)) / 100).format('0,0');

  return (
    <TouchableRipple
      style={{ paddingVertical: 4 }}
      rippleColor={colors.WHITE}
      onPress={() => {
        // navigation.navigate(UserRoutes.ORDER_DETAILS_SCREEN, { shoppingCartItem });
      }}>
      <View style={{ backgroundColor: colors.WHITE, borderRadius: 8 }}>
        <View style={{ flex: 1, flexDirection: 'row', padding: 6 }}>
          <View style={{ flex: 0 }}>
            {service.pictureUrl && <Card.Cover style={{ borderRadius: 4, height: 60, width: 60 }} source={{ uri: service.pictureUrl }} />}
          </View>
          <View style={{ width: 8 }} />
          <View style={{ flex: 1, justifyContent: 'flex-start' }}>
            <View>
              <Text style={{ color: colors.PRIMARY_FONT, fontWeight: '700' }}>{`${service.name}`}</Text>
            </View>
            <View>
              {/* PRICE */}
              <View style={{ flexDirection: 'row', marginVertical: 3 }}>
                <Text style={{ fontSize: 11 }}>{`${numeral(service.price).format('0,0')} VNĐ`}</Text>
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
              <DecreaseButton
                onPress={() => {
                  dispatch(decreaseCartAction(service, 1));
                }}>
                -
              </DecreaseButton>
              <View
                style={{
                  paddingHorizontal: 12,
                  paddingVertical: 3,
                  borderColor: colors.PRIMARY_BORDER,
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{ fontWeight: '400' }}>{`${numeral(item.quantity).format('0,0')}`}</Text>
              </View>
              <IncreaseButton
                onPress={() => {
                  dispatch(increaseCartAction(service, 1));
                }}>
                +
              </IncreaseButton>
              <View flex={1} />
              <DeleteIconButton
                onPress={() => {
                  dispatch(removeFromCartAction(service.id));
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableRipple>
  );
}
