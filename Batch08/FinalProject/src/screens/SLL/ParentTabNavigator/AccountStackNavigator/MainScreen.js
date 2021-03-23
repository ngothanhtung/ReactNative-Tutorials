/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar, Button, Title, Divider } from 'react-native-paper';
import { ListItem, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Container from '../../../../components/Container';
import colors from '../../../../constants/colors';
import { signOutAction } from '../../../../modules/auth/actions';

const MainScreen = () => {
  const signedInUser = useSelector((state) => state.auth.signedInUser);
  const dispatch = useDispatch();

  return (
    <Container showAppbar title="TÀI KHOẢN" subTitle="Cấu hình tài khoản" showActionButton style={{ backgroundColor: colors.WHITE }}>
      {signedInUser && (
        <React.Fragment>
          <View style={{ flexDirection: 'row', backgroundColor: colors.WHITE }}>
            <View style={{ padding: 12 }}>
              <Avatar.Image
                source={{
                  uri: signedInUser.profile.avatarUrl,
                }}
                size={64}
              />
            </View>
            <View style={{ paddingHorizontal: 12, justifyContent: 'center' }}>
              <Text style={{ color: colors.PRIMARY_FONT, fontWeight: '700', fontSize: 17 }}>{`${signedInUser.displayName}`}</Text>
              <Text style={{ color: colors.PRIMARY_FONT, fontWeight: '400' }}>{`${signedInUser.email}`}</Text>
            </View>
          </View>
          <Divider style={{ height: 1 }} />
          <View marginTop={12}>
            <Title style={{ color: colors.SLL_PRIMARY_FONT, fontSize: 16, marginLeft: 20 }}>Thiết lập, cấu hình tài khoản</Title>
          </View>
          <ScrollView style={{ marginTop: 12, flex: 1 }}>
            <ListItem bottomDivider onPress={() => {}}>
              <Icon name="lock" color={colors.PRIMARY_ICON} size={24} />
              <ListItem.Content>
                <ListItem.Title>Đổi mật khẩu</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron size={24} />
            </ListItem>
            {/* PHONE */}
            <ListItem bottomDivider onPress={() => {}}>
              <Icon name="phone" color={colors.PRIMARY_ICON} size={24} />
              <ListItem.Content>
                <ListItem.Title>Đổi số điện thoại liên lạc</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron size={24} />
            </ListItem>
            {/* HELP */}
            <ListItem bottomDivider onPress={() => {}}>
              <Icon name="help" color={colors.PRIMARY_ICON} size={24} />
              <ListItem.Content>
                <ListItem.Title>Trợ giúp</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron size={24} />
            </ListItem>
            {/* FEEDBACK */}
            <ListItem bottomDivider onPress={() => {}}>
              <Icon name="message" color={colors.PRIMARY_ICON} size={24} />
              <ListItem.Content>
                <ListItem.Title>Phản hồi / Góp ý</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron size={24} />
            </ListItem>

            {/* CHILDREN */}
            <ListItem bottomDivider onPress={() => {}}>
              <Icon name="group" color={colors.PRIMARY_ICON} size={24} />
              <ListItem.Content>
                <ListItem.Title>Danh sách con cái</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron size={24} />
            </ListItem>
          </ScrollView>
          <View style={{ padding: 12 }}>
            <Button
              contentStyle={{ height: 48, alignItems: 'center', justifyContent: 'center' }}
              style={{ elevation: 0 }}
              icon="logout"
              dark
              mode="contained"
              onPress={() => {
                dispatch(signOutAction());
              }}>
              Thoát
            </Button>
          </View>
        </React.Fragment>
      )}
    </Container>
  );
};

export default MainScreen;
