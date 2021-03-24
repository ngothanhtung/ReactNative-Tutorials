/* eslint-disable react-native/no-inline-styles */

import React, { Fragment } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Surface, Title, Paragraph, TouchableRipple, useTheme } from 'react-native-paper';
import { Icon, Image } from 'react-native-elements';
import Container from '../../../../components/Container';
import colors from '../../../../constants/colors';
import { ScrollView } from 'react-native-gesture-handler';

const ICON_SIZE = 40;

// ---------------------------------------------------------------------------------------------------
// DATA
// ---------------------------------------------------------------------------------------------------
const blocks = [
  {
    id: 'thoi-khoa-bieu',
    title: 'Thời khóa biểu',
    screen: 'SSL_Parent_Home_ScheduleScreen',
    icon: 'calendar-month',
  },
  {
    id: 'vang-nghi',
    title: 'Vắng nghỉ',
    icon: 'calendar-check',
  },
  {
    id: 'hoc-phi',
    title: 'Học phí / Phí',
    icon: 'currency-usd',
  },

  {
    id: 'dang-ky-dich-vu',
    title: 'Đăng ký dịch vụ',
    icon: 'apps',
  },

  {
    id: 'thu-vien-anh',
    title: 'Thư viện ảnh / video',
    icon: 'image-outline',
  },

  {
    id: 'gop-y',
    title: 'Góp ý',
    icon: 'message-text-outline',
  },
];

// ---------------------------------------------------------------------------------------------------
// BLOCK COMPONENT
// ---------------------------------------------------------------------------------------------------
const Block = ({ item, index }) => {
  const { colors: themeColors } = useTheme();
  const navigation = useNavigation();
  return (
    <Surface
      style={{
        borderColor: colors.LIGHT_GRAY,
        borderWidth: 0,
        elevation: 1,
        flex: 1,
        marginVertical: 6,
        marginLeft: index % 2 === 0 ? 16 : 8,
        marginRight: index % 2 === 0 ? 8 : 16,
        height: 90,
        borderRadius: 12,
        backgroundColor: colors.WHITE,
      }}>
      <TouchableRipple
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 12 }}
        borderless={true}
        rippleColor={themeColors.primary}
        onPress={() => {
          navigation.navigate(item.screen);
        }}>
        <React.Fragment>
          <Icon name={item.icon} size={ICON_SIZE} type="material-community" color={themeColors.primary} />
          <View style={{ marginTop: 4 }}>
            <Text style={{ fontFamily: 'Roboto-Medium', color: themeColors.primary }}>{item.title}</Text>
          </View>
        </React.Fragment>
      </TouchableRipple>
    </Surface>
  );
};

// ---------------------------------------------------------------------------------------------------
// NEWS COMPONENT
// ---------------------------------------------------------------------------------------------------
const News = () => {
  const { colors: themeColors } = useTheme();
  const Dot = ({ size = 12, mode = 'contained' }) => {
    return (
      <View
        style={{
          margin: size / 2,
          height: size,
          width: size,
          borderRadius: size / 2,
          backgroundColor: mode === 'contained' ? themeColors.primary : colors.WHITE,
          borderWidth: 1,
          borderColor: themeColors.primary,
        }}
      />
    );
  };

  return (
    <View style={{ flex: 0, paddingHorizontal: 12, marginBottom: 12 }}>
      <Image
        style={{ width: '100%', height: 200, borderRadius: 12, opacity: 0.8 }}
        source={{ uri: 'https://cdn.pixabay.com/photo/2015/07/31/11/45/library-869061_960_720.jpg' }}
      />

      <Button
        uppercase
        contentStyle={{ flexDirection: 'row-reverse' }}
        labelStyle={{ fontFamily: 'Roboto-Regular', fontSize: 13 }}
        icon="chevron-right"
        mode="contained"
        style={{ marginTop: -48, alignSelf: 'center' }}
        onPress={() => {}}>
        Xem chi tiết
      </Button>

      <View style={{ marginTop: 24, justifyContent: 'center', flexDirection: 'row' }}>
        <Dot />
        <Dot mode="outline" />
        <Dot mode="outline" />
      </View>
      <View style={{ position: 'absolute', top: 64, alignSelf: 'center', alignItems: 'center' }}>
        <Title style={{ color: colors.WHITE, fontFamily: 'Roboto-Bold' }}>CÁC BIỆN PHÁP</Title>
        <Title style={{ color: colors.WHITE, fontFamily: 'Roboto-Bold' }}>PHÒNG CHỐNG DỊCH COVID-19</Title>
      </View>
    </View>
  );
};

// ---------------------------------------------------------------------------------------------------
// NOTIFICATION COMPONENT
// ---------------------------------------------------------------------------------------------------
const Notifications = () => {
  const { colors: themeColors } = useTheme();

  const NotificationItem = ({ text }) => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Icon name="chevron-right" size={20} color={colors.WHITE} />
        <Paragraph style={{ color: colors.WHITE, fontFamily: 'Roboto-Medium' }}>{text}</Paragraph>
      </View>
    );
  };

  return (
    <View style={{ minHeight: 64, paddingHorizontal: 12, marginTop: 12 }}>
      <TouchableRipple borderless rippleColor={colors.WHITE} onPress={() => {}} style={{ borderRadius: 12 }}>
        <View style={{ flex: 1, borderRadius: 12, paddingHorizontal: 12, paddingVertical: 16, flexDirection: 'row', backgroundColor: themeColors.primary }}>
          <View style={{ justifyContent: 'center' }}>
            <Icon name="bell-ring-outline" type="material-community" size={32} color={colors.WHITE} />
          </View>
          <View style={{ flex: 1, paddingHorizontal: 8 }}>
            <NotificationItem text="Có 03 nhận xét của GV chủ nhiệm" />
            <NotificationItem text="Có 01 nhận xét của GV bộ môn: Vật lý" />
            <NotificationItem text="Có 02 nhận xét của GV bộ môn: Kỹ năng sống" />
          </View>
          <View style={{ justifyContent: 'center' }}>
            <Icon name="chevron-right" type="material-community" size={32} color={colors.WHITE} />
          </View>
        </View>
      </TouchableRipple>
    </View>
  );
};

// ---------------------------------------------------------------------------------------------------
// MAINSCREEN
// ---------------------------------------------------------------------------------------------------
export default function MainScreen() {
  const renderItem = ({ item, index }) => {
    return <Block item={item} index={index} />;
  };

  return (
    <Container showAppbar title="INTERNATIONAL SCHOOL" subTitle="Trang chủ" showBackButton={false} showActionButton>
      <ScrollView style={{ flex: 1, backgroundColor: '#FAFAFA' }}>
        <View style={{ flex: 1, paddingTop: 12 }}>
          <News />
          <FlatList data={blocks} keyExtractor={(item) => 'block-' + item.id} numColumns={2} renderItem={renderItem} />
          <Notifications />
        </View>
      </ScrollView>
    </Container>
  );
}
