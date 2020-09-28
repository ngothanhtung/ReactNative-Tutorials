/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import numeral from 'numeral';
import {Card, Paragraph, Chip, TouchableRipple} from 'react-native-paper';
import FirestoreService from '../../../services/FirestoreService';
import colors from '../../../constants/colors';

const ProductDetailsScreen = ({route, navigation}) => {
  const {serviceId} = route.params;

  const [loading, setLoading] = React.useState(true);
  const [service, setService] = React.useState(null);

  React.useEffect(() => {
    FirestoreService.getService(serviceId)
      .then((data) => {
        console.log(data);
        setService(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, [serviceId]);
  return (
    <View style={{flex: 1}}>
      {service && (
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
            {service.pictureUrl && (
              <Card.Cover
                style={{borderTopLeftRadius: 12, borderTopRightRadius: 12}}
                source={{uri: service.pictureUrl}}
              />
            )}
            <Card.Title
              title={service.name}
              titleStyle={{
                fontSize: 16,
                fontWeight: '700',
                color: colors.PRIMARY,
              }}
            />

            <Card.Content>
              <Paragraph style={{textAlign: 'justify'}}>
                {service.description}
              </Paragraph>
              <React.Fragment>
                <View style={{height: 12}} />
                <View style={{flexDirection: 'row'}}>
                  <Chip
                    mode="flat"
                    style={{flex: 1, backgroundColor: colors.LIGHT_GRAY}}
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
                          backgroundColor: colors.LIGHT_GRAY,
                        }}
                        icon="currency-usd">
                        <Text>{`Giá gốc: ${numeral(service.old_price).format(
                          '0,0',
                        )} VNĐ`}</Text>
                      </Chip>
                    </View>
                  </React.Fragment>
                )}

                {service.duration > 0 && (
                  <React.Fragment>
                    <View style={{height: 4}} />
                    <View style={{flexDirection: 'row'}}>
                      <Chip
                        mode="flat"
                        style={{
                          flex: 1,
                          backgroundColor: colors.LIGHT_GRAY,
                        }}
                        icon="clock">
                        <Text>{`Thời gian: ${numeral(service.duration).format(
                          '0,0',
                        )} phút`}</Text>
                      </Chip>
                    </View>
                  </React.Fragment>
                )}
              </React.Fragment>
            </Card.Content>
          </View>
        </TouchableRipple>
      )}
    </View>
  );
};

export default ProductDetailsScreen;
