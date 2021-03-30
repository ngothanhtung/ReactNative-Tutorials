/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, FlatList, RefreshControl, StyleSheet, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import { Icon } from 'react-native-elements';
import { useTheme } from 'react-native-paper';

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

const { height: HEIGHT } = Dimensions.get('window');

export default function FlashCardScreen({ navigation, route }) {
  const { colors: themeColors } = useTheme();

  const [flashcards, setFlashcards] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [refresh, setRefresh] = React.useState(0);

  React.useEffect(() => {
    FLASHCARD_Service.getFlashCardsOfCategory(route.params.category.id).then((data) => {
      setFlashcards(data);
      setLoading(false);
    });
  }, [refresh]);

  return (
    <Container ready={!loading} style={{}}>
      <Swiper
        loop={false}
        showsButtons={false}
        showsPagination={true}
        nextButton={
          <View style={{ height: 32, width: 32, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 24, opacity: 1 }}>
            <Icon name="chevron-right" color={themeColors.primary} size={24} />
          </View>
        }
        prevButton={
          <View style={{ height: 32, width: 32, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 24, opacity: 1 }}>
            <Icon name="chevron-left" color={themeColors.primary} size={24} />
          </View>
        }
        dot={
          <View
            style={{
              backgroundColor: colors.DARK_GRAY,
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: -140,
              marginBottom: 3,
            }}
          />
        }
        activeDotStyle={{ backgroundColor: themeColors.primary, marginTop: -140 }}>
        {flashcards.map((item) => {
          return (
            <React.Fragment>
              <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Image source={{ uri: item.imageUrl }} style={{ height: '100%', width: '100%' }} resizeMode="cover" />
              </View>
              <View style={{ height: 120, backgroundColor: 'white', justifyContent: 'flex-end', alignItems: 'center' }}>
                <View style={{ padding: 24, alignItems: 'center' }}>
                  <Text style={{ fontSize: 18, fontFamily: 'Roboto-Medium', color: colors.PRIMARY_FONT }}>{item.word}</Text>
                  <View height={4} />
                  <Text style={{ fontSize: 13, fontFamily: 'Roboto-Regular', color: colors.DARK_GRAY }}>{item.example}</Text>
                </View>
              </View>
            </React.Fragment>
          );
        })}
      </Swiper>
    </Container>
  );
}
