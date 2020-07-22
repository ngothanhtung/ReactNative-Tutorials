/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Card, Paragraph, Chip, TouchableRipple} from 'react-native-paper';

import numeral from 'numeral';
import Colors from '../../../../constants/Colors';

function Service({service}) {
  const navigation = useNavigation();

  return (
    <TouchableRipple
      style={{margin: 12}}
      rippleColor={Colors.WHITE}
      onPress={() => {}}>
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.WHITE,
          borderRadius: 12,
          paddingBottom: 24,
        }}>
        {service.images && (
          <Card.Cover
            style={{borderTopLeftRadius: 12, borderTopRightRadius: 12}}
            source={{uri: service.images[0].src}}
          />
        )}
        <Card.Title
          title={service.name}
          titleStyle={{
            fontSize: 16,
            fontWeight: '700',
            color: Colors.PRIMARY,
          }}
        />

        <Card.Content>
          <Paragraph style={{textAlign: 'justify'}}>
            {service.short_description}
          </Paragraph>
          <React.Fragment>
            <View style={{height: 12}} />
            <View style={{flexDirection: 'row'}}>
              <Chip
                mode="flat"
                style={{flex: 1, backgroundColor: Colors.LIGHT_GRAY}}
                icon="currency-usd">
                <Text>{`Giá: ${numeral(service.price).format(
                  '0,0',
                )} VNĐ`}</Text>
              </Chip>
            </View>
            {service.old_price > 0 && (
              <React.Fragment>
                <View style={{height: 4}} />
                <View style={{flexDirection: 'row'}}>
                  <Chip
                    mode="flat"
                    style={{
                      flex: 1,
                      backgroundColor: Colors.LIGHT_GRAY,
                    }}
                    icon="currency-usd">
                    <Text>{`Giá gốc: ${numeral(service.old_price).format(
                      '0,0',
                    )} VNĐ`}</Text>
                  </Chip>
                </View>
              </React.Fragment>
            )}
          </React.Fragment>
        </Card.Content>
      </View>
    </TouchableRipple>
  );
}

Service.propTypes = {
  service: PropTypes.object.isRequired,
};
Service.defaultProps = {};

export default Service;
