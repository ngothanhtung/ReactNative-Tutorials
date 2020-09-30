/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, ScrollView } from 'react-native';
import numeral from 'numeral';
import { Card, Paragraph, Chip, Button } from 'react-native-paper';
import FirestoreService from '../../../../services/FirestoreService';
import colors from '../../../../constants/colors';
import { addToCart } from '../../actions';

const ServiceDetails = ({ serviceId }) => {
  // Redux hooks
  const dispatch = useDispatch();
  // Dùng để hiển thị trong khi load data
  const [loading, setLoading] = React.useState(true);
  const [service, setService] = React.useState(null);

  React.useEffect(() => {
    FirestoreService.getService(serviceId)
      .then((data) => {
        // console.log(data);
        setService(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, [serviceId]);
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {service && (
        <ScrollView style={{ flex: 1 }}>
          {service.pictureUrl && (
            <Card.Cover source={{ uri: service.pictureUrl }} />
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
            <Paragraph style={{ textAlign: 'justify' }}>
              {service.description}
            </Paragraph>
            <React.Fragment>
              <View style={{ height: 12 }} />
              <View style={{ flexDirection: 'row' }}>
                <Chip
                  mode="flat"
                  style={{ flex: 1, backgroundColor: colors.LIGHT_GRAY }}
                  icon="currency-usd">
                  <Text>{`Giá: ${numeral(service.price).format(
                    '0,0',
                  )} VNĐ`}</Text>
                </Chip>
              </View>
              {service.old_price > 0 && (
                <React.Fragment>
                  <View style={{ height: 4 }} />
                  <View style={{ flexDirection: 'row' }}>
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
                  <View style={{ height: 4 }} />
                  <View style={{ flexDirection: 'row' }}>
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
        </ScrollView>
      )}
      <Button
        onPress={() => {
          // Alert.alert('Thông báo', 'Chức năng đang được phát triển');
          dispatch(addToCart(service, 1));
        }}>
        Thêm vào giỏ hàng
      </Button>
    </View>
  );
};

export default ServiceDetails;
