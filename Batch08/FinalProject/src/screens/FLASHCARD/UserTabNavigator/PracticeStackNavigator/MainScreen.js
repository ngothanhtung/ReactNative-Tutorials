/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, FlatList, RefreshControl, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { Icon, Rating } from 'react-native-elements';
import { useTheme, TouchableRipple } from 'react-native-paper';
import { Formik } from 'formik';

import Container from '../../../../components/Container';
import FLASHCARD_Service from '../../../../services/FLASHCARD_Service';
import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  titleText: {
    fontFamily: 'Roboto-Bold',
    color: colors.PRIMARY_FONT,
    // fontSize: 16,
    textTransform: 'uppercase',
  },

  descriptionText: {
    fontFamily: 'Roboto-Regular',
    color: colors.DARK_GRAY,
    fontSize: 13,
  },
});

export default function MainScreen({ navigation }) {
  const { colors: themeColors } = useTheme();

  const [categories, setCategories] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [refresh, setRefresh] = React.useState(0);

  React.useEffect(() => {
    FLASHCARD_Service.getCategories().then((data) => {
      setCategories(data);
      setLoading(false);
    });
  }, [refresh]);

  const renderItem = React.useCallback(({ item }) => {
    return (
      <TouchableOpacity
        // underlayColor={themeColors.primary}
        onPress={() => {
          navigation.navigate('FLASHCARD_User_Practice_FlashCardScreen', { category: item });
        }}>
        <View style={{ flexDirection: 'row', marginBottom: 12 }}>
          <Image source={{ uri: item.imageUrl }} style={{ height: 96, width: 96, borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }} />
          <View style={{ flex: 1, justifyContent: 'flex-start', padding: 12, borderTopRightRadius: 8, borderBottomRightRadius: 8, backgroundColor: 'white' }}>
            <Text style={styles.titleText}>{item.name}</Text>
            <View height={3} />
            <Text style={styles.descriptionText}>{item.description}</Text>
            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', flexDirection: 'row' }}>
              <Icon name="access-time" type="material" color={colors.PRIMARY_ICON} size={16} />
              <View width={4} />
              <Text style={{ color: colors.PRIMARY_FONT, fontSize: 12 }}>30 min</Text>
              <View flex={1} />
              <Text style={{ color: colors.PRIMARY_FONT, fontWeight: '700' }}>4.5</Text>
              <View width={4} />
              <Icon name="star" color={colors.STAR} size={20} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }, []);

  return (
    <Container ready={!loading} style={{ padding: 12, backgroundColor: colors.WHITE_SMOKE }}>
      <Formik
        initialValues={{ searchText: '' }} // validationSchema={SignInSchema}
        onSubmit={(values) => {
          console.log(values);
        }}>
        {(formik) => (
          <View style={{ flexDirection: 'row' }}>
            <TextInput
              placeholder="Search"
              style={{ flex: 1, height: 48, backgroundColor: 'white', borderTopLeftRadius: 8, borderBottomLeftRadius: 8, paddingHorizontal: 12 }}
              onChangeText={formik.handleChange('searchText')}
            />
            <TouchableRipple
              style={{
                height: 48,
                backgroundColor: themeColors.primary,
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
                justifyContent: 'center',
                paddingHorizontal: 12,
              }}
              onPress={formik.handleSubmit}>
              <Icon name="search" color="white" size={20} />
            </TouchableRipple>
          </View>
        )}
      </Formik>

      <View height={12} />
      <FlatList
        data={categories}
        keyExtractor={(item) => 'category-' + item.id}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={() => {
              setRefresh(refresh + 1);
            }}
          />
        }
      />
    </Container>
  );
}
