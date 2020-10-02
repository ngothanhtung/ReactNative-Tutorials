/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import FirestoreService from '../../../../services/FirestoreService';
import Loading from '../../../../components/Loading';

import Service from './components/Service';

export default function SignIn() {
  const [loading, setLoading] = React.useState(false);
  const [services, setServices] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    FirestoreService.getServices().then((result) => {
      setServices(result);
      setLoading(false);
    });
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View>
        <Service service={item} />
      </View>
    );
  };

  const onRefresh = () => {
    setLoading(true);
    FirestoreService.getServices().then((result) => {
      setServices(result);
      setLoading(false);
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={services}
        keyExtractor={(item, index) => `service-${index}`}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }
      />
    </View>
  );
}
