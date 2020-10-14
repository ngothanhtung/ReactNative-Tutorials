/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Platform,
  PermissionsAndroid,
  Alert,
  Linking,
  Dimensions,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Button } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import TimerMixin from 'react-timer-mixin';
import numeral from 'numeral';
import colors from '../../constants/colors';

let userLocation = null;

let fixedVendor = {
  id: 1,
  name: 'Shop ABC',
  address: 'Yen Bai, Da Nang',
  distance: 10,
  latitude: 16.071276,
  longitude: 108.223877,
};

export default function MapScreen() {
  const [ready, setReady] = React.useState(true);
  const [selectedVendor, setSelectedVendor] = React.useState(null);

  const refMapView = React.useRef(null);
  const refVendorView = React.useRef(true);

  const requestPermission = async () => {
    const alertModel = {
      title: 'GrabServices',
      message: '',
      buttons: [{ text: 'OK' }],
      options: { cancelable: false },
    };
    if (Platform.OS === 'android') {
      try {
        const result = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        // console.log(result);
        if (result !== PermissionsAndroid.RESULTS.GRANTED) {
          setReady(true);

          if (result === PermissionsAndroid.RESULTS.DENIED) {
            alertModel.message =
              'Lỗi yêu cầu cấp quyền vị trí, vui lòng cấp quyền vị trí để sử dụng chức năng.';
            alertModel.buttons[0].onPress = requestPermission;
          }

          if (result === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
            alertModel.message =
              'Lỗi yêu cầu cấp quyền vị trí, vui lòng cấp quyền vị trí để sử dụng chức năng ở phần cài đặt.';
            alertModel.buttons[0].text = 'Cài đặt';
            alertModel.buttons[0].onPress = Linking.openSettings;
          }
        }
      } catch (error) {
        // console.log(error);
        setReady(false);
        alertModel.message = 'Lỗi yêu cầu cấp quyền vị trí, vui lòng thử lại.';
        alertModel.buttons[0].onPress = requestPermission;
      }
    }
    if (ready === false) {
      Alert.alert(
        alertModel.title,
        alertModel.message,
        alertModel.buttons,
        alertModel.options,
      );
    }
    // this.setState(stateModel);
  };

  React.useEffect(() => {
    requestPermission();
  }, []);

  const moveCameraToLocation = (
    longitude,
    latitude,
    altitude,
    heading,
    animated = false,
  ) => {
    const duration = animated ? 500 : 1;
    refMapView.current.animateCamera(
      {
        altitude,
        heading,
        pitch: 1,
        zoom: 15,
        center: { latitude, longitude },
      },
      { duration },
    );
  };

  const getUserLocation = async (animated = false) => {
    if (userLocation) {
      // console.log(userLocation);
      moveCameraToLocation(
        userLocation.longitude,
        userLocation.latitude,
        userLocation.altitude,
        userLocation.heading,
        animated,
      );

      const { latitude, longitude } = userLocation;
      // getProductByLocation(longitude, latitude);
    }
  };

  const onUserLocationChange = async ({ nativeEvent }) => {
    // console.log(nativeEvent);
    let isInit = false;
    if (userLocation === null) {
      isInit = true;
    }
    userLocation = nativeEvent.coordinate;
    if (isInit) {
      if (Platform.OS === 'ios') {
        await new Promise((resolve) => TimerMixin.setTimeout(resolve, 1000));
        getUserLocation(false);
      } else {
        getUserLocation(false);
      }
    }
  };

  const renderMarkers = (vendor) => {
    return (
      <Marker
        key={`${vendor.id}`}
        title={vendor.name}
        description={`${vendor.address}\nKhoảng cách ${numeral(
          vendor.distance / 1000,
        ).format('0,0.00')} Km`}
        coordinate={{
          longitude: vendor.longitude,
          latitude: vendor.latitude,
        }}
        onPress={() => {
          console.log(vendor);
          setSelectedVendor(vendor);
          refVendorView.current.transitionTo({ bottom: 0 }, 750);
        }}>
        <View
          style={{
            backgroundColor: colors.DARK_RED,
            height: 32,
            width: 32,
            borderRadius: 16,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="store" size={24} color={colors.WHITE} />
        </View>
      </Marker>
    );
  };

  const onPoiClick = ({ nativeEvent }) => {
    console.log(nativeEvent);
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        ref={refMapView}
        mapType="standard"
        animateCamera={{ duration: 5000 }}
        loadingEnabled
        showsUserLocation
        followsUserLocation={false}
        showsCompass
        rotateEnabled
        showsBuildings={false}
        moveOnMarkerPress={false}
        toolbarEnabled={false}
        // provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : null}
        provider={PROVIDER_GOOGLE}
        loadingBackgroundColor="white"
        // loadingIndicatorColor={colors.YOPA_BACKGROUND}
        style={{ flex: 1 }}
        onPress={() => {}}
        onPoiClick={onPoiClick}
        onUserLocationChange={onUserLocationChange}
        onPress={() => {
          console.log('Map OnPress');
          // setSelectedVendor(null);
          // refVendorView.current.transitionTo(
          //   { bottom: -Dimensions.get('screen').height },
          //   750,
          // );
        }}>
        {renderMarkers(fixedVendor)}
      </MapView>
      <Animatable.View
        ref={refVendorView}
        style={{
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          overflow: 'hidden',
          position: 'absolute',
          backgroundColor: 'white',
        }}>
        {selectedVendor && (
          <View style={{ height: 300 }}>
            <Text>{selectedVendor && selectedVendor.name}</Text>
            <Button
              onPress={() => {
                setSelectedVendor(null);
                refVendorView.current.transitionTo(
                  { bottom: -Dimensions.get('screen').height },
                  750,
                );
              }}>
              Close
            </Button>
          </View>
        )}
      </Animatable.View>
    </View>
  );
}
