import { Alert, Button, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import apiClient from '../apiClient';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';

const Categories = () => {
  const navigation = useNavigation();

  const [categories, setCategories] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [refresh, setRefresh] = React.useState(0);

  const getCategories = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get('/online-shop/categories');
      console.log('Categories');
      setCategories(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching:', error);
      setLoading(false);
    }
  };

  // Khi màn hình được focus, gọi lại API để lấy danh sách categories
  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      console.log('Screen is focused');
      getCategories();
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, []),
  );

  React.useEffect(() => {
    // Call the function to fetch categories
    getCategories();
  }, [refresh]);

  const deleteCategory = async (id: number) => {
    try {
      // Call the API to delete the category
      const response = await apiClient.delete(`/online-shop/categories/${id}`);
      // Update the categories state to remove the deleted category
      setCategories((prevCategories) =>
        prevCategories.filter((category: any) => category.id !== id),
      );
    } catch (error) {
      console.log('Error deleting category:', error);
    }
  };

  const onDelete = async (id: number) => {
    try {
      // Show a confirmation dialog before deleting
      Alert.alert(
        'Confirm Deletion',
        'Are you sure you want to delete this category?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: async () => {
              deleteCategory(id);
            },
          },
        ],
        { cancelable: false },
      );
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.itemContainer}>
        <View>
          <Text>{item.id}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{item.name}</Text>
          <Text>{item.description}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Button
            title="Edit"
            onPress={() => {
              // Navigate to the update category screen
              navigation.navigate('UpdateCategory', { category: item });
            }}
          />
          <Button
            title="Delete"
            onPress={() => {
              onDelete(item.id);
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        refreshing={loading}
        onRefresh={() => {
          setRefresh(refresh + 1);
        }}
        data={categories}
        keyExtractor={(item, index) => `product-${index}`}
        renderItem={renderItem}
        ItemSeparatorComponent={() => (
          <View style={{ marginTop: 8, marginBottom: 8, height: 1, backgroundColor: 'gray' }} />
        )}
      />
    </SafeAreaView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 12,
  },

  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
