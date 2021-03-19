/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import Container from '../../../../components/Container';
import colors from '../../../../constants/colors';

const ICON_SIZE = 40;
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const blocks = [
  {
    id: 'thoi-khoa-bieu',
    title: 'Thời khóa biểu',
    icon: <Icon name="calendar" size={ICON_SIZE} type="material-community" color={colors.SLL_PRIMARY} />,
  },
  {
    id: 'vang-nghi',
    title: 'Vắng nghỉ',
    icon: <Icon name="calendar-check" size={ICON_SIZE} type="material-community" color={colors.SLL_PRIMARY} />,
  },
  {
    id: 'hoc-phi',
    title: 'Học phí / Phí',
    icon: <Icon name="cash-usd-outline" size={ICON_SIZE} type="material-community" color={colors.SLL_PRIMARY} />,
  },

  {
    id: 'dang-ky-dich-vu',
    title: 'Đăng ký dịch vụ',
    icon: <Icon name="apps" size={ICON_SIZE} type="material-community" color={colors.SLL_PRIMARY} />,
  },

  {
    id: 'thu-vien-anh',
    title: 'Thư viện ảnh / video',
    icon: <Icon name="image-outline" size={ICON_SIZE} type="material-community" color={colors.SLL_PRIMARY} />,
  },

  {
    id: 'gop-y',
    title: 'Góp ý',
    icon: <Icon name="message-text-outline" size={ICON_SIZE} type="material-community" color={colors.SLL_PRIMARY} />,
  },
];

export default function MainScreen() {
  return (
    <Container showAppbar title="SKY-LINE" showBackButton showActionButton actionButton={{ icon: 'cog-outline' }}>
      <View style={{ flex: 1, paddingTop: 12, backgroundColor: '#FAFAFA' }}>
        <FlatList
          style={{ flex: 1 }}
          data={blocks}
          keyExtractor={(item, index) => 'block-' + index}
          numColumns={2}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  elevation: 1,
                  flex: 1,
                  marginVertical: 6,
                  marginLeft: index % 2 === 0 ? 12 : 6,
                  marginRight: index % 2 === 0 ? 6 : 12,
                  height: 90,
                  borderRadius: 12,
                  backgroundColor: colors.WHITE,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View>{item.icon}</View>
                <View style={{ marginTop: 4 }}>
                  <Text style={{ fontSize: 14, color: colors.SLL_PRIMARY, fontWeight: '400' }}>{item.title}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </Container>
  );
}
