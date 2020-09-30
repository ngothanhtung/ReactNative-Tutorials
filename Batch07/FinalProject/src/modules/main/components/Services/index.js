/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, FlatList } from 'react-native';
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

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={services}
          keyExtractor={(item, index) => `service-${index}`}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}
