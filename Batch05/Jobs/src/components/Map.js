import React, { Component } from 'react';
import { Platform, StyleSheet, Text, Image, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';

const mapStyles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const Map = (props) => {
  return (
    <MapView
      provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : null}
      animateCamera={{ duration: 5000 }}
      style={mapStyles.map}
      onPress={(e) => {}}
      mapType='standard'
      showsUserLocation={true}
      loadingEnabled={true}
      region={
        props.position && {
          latitude: props.position.latitude,
          longitude: props.position.longitude,
          latitudeDelta: 0.025,
          longitudeDelta: 0.025,
        }
      }
      onMapReady={() => {}}>
      {props.position && (
        <Marker coordinate={{ latitude: props.position.latitude, longitude: props.position.longitude }} title={props.position.name} description=''>
          <Callout>
            <Text>{props.position.name}</Text>
          </Callout>
        </Marker>
      )}

      {props.employees &&
        props.employees.map((employee, index) => {
          return (
            <Marker key={index} coordinate={{ latitude: employee.position.latitude, longitude: employee.position.longitude }} title={employee.displayName} description=''>
              <View style={{ justifyContent: 'center', alignItems: 'center', height: 34, width: 34, borderRadius: 17, padding: 2, borderColor: 'green', borderWidth: 2 }}>
                <Image source={{ uri: employee.photoURL }} style={{ height: 28, width: 28, borderRadius: 14 }} />
              </View>

              <Callout>
                <View style={{ width: 180, height: 60, padding: 6 }}>
                  <View>
                    <Text style={{ color: 'black', fontSize: 13, fontWeight: '700' }}>{employee.displayName}</Text>
                  </View>
                  <View>
                    <Text style={{ color: 'black', fontSize: 11 }}>Email: {employee.email}</Text>
                  </View>
                </View>
              </Callout>
            </Marker>
          );
        })}
    </MapView>
  );
};

export default Map;
