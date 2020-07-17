/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {signOutAction} from '../../modules/auth/actions';
import auth from '@react-native-firebase/auth';

import FirestoreService from '../../services/FirestoreService';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    FirestoreService.getVendors().then((vendors) => {
      console.log('Vendors:', vendors);
    });

    FirestoreService.getServices().then((services) => {
      console.log('Services:', services);
    });

    FirestoreService.getServicesOfVendor('r2XADSB2QSH4kWnDolbO').then(
      (services) => {
        console.log('Services Of Vendor:', services);
      },
    );
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Sign out"
        onPress={() => {
          auth()
            .signOut()
            .then(() => {
              dispatch(signOutAction());
            });
        }}
      />
    </View>
  );
};

export default HomeScreen;
