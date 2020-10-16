/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { Avatar, Button } from 'react-native-paper';
import { ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Container from '../../components/Container';
// import UserRoutes from '../../routes/UserRoutes';
import colors from '../../constants/colors';
import { signOutAction } from '../../modules/auth/actions';

// import { logoutAction } from '../../modules/AuthModule/actions';

const ProfileScreen = () => {
  const loggedInUser = useSelector((state) => state.auth.signedInUser);
  const dispatch = useDispatch();

  return (
    <Container>
      {loggedInUser && (
        <React.Fragment>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ padding: 12 }}>
              <Avatar.Image
                source={{
                  uri: `https://randomuser.me/api/portraits/men/97.jpg`,
                }}
                size={64}
              />
            </View>
            <View style={{ paddingHorizontal: 12, justifyContent: 'center' }}>
              <Text style={{ color: colors.PRIMARY_FONT, fontWeight: '700', fontSize: 17 }}>{`${loggedInUser.displayName}`}</Text>
              <Text style={{ color: colors.PRIMARY_FONT, fontWeight: '400' }}>{`${loggedInUser.email}`}</Text>
            </View>
          </View>
          <ScrollView style={{ marginTop: 24, flex: 1 }}>
            <ListItem
              title="Đơn hàng"
              leftIcon={{ type: 'material-community', name: 'shopping', color: colors.PRIMARY_ICON }}
              bottomDivider
              chevron={{ color: colors.PRIMARY_ICON }}
              onPress={() => {}}
            />
            <ListItem
              title="Cập nhật thông tin"
              leftIcon={{ type: 'material-community', name: 'account', color: colors.PRIMARY_ICON }}
              bottomDivider
              chevron={{ color: colors.PRIMARY_ICON }}
              onPress={() => {}}
            />
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

export default ProfileScreen;
