/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, FlatList } from 'react-native';
import FirestoreService from '../../../../services/FirestoreService';
import Loading from '../../../../components/Loading';

import Vendor from './Vendor';

export default function SignIn() {
  const [loading, setLoading] = React.useState(false);
  const [vendors, setVendors] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    FirestoreService.getVendors().then((result) => {
      console.log('Vendors', result);
      setVendors(result);
      setLoading(false);
    });
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View>
        <Vendor vendor={item} />
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={vendors}
          keyExtractor={(item, index) => `service-${index}`}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}
