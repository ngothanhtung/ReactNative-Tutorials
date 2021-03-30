/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import Sound from 'react-native-sound';
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

const Dot = () => {
  return (
    <View
      style={{
        backgroundColor: colors.DARK_GRAY,
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: -180,
        marginBottom: 3,
      }}
    />
  );
};

const NextButton = () => {
  const { colors: themeColors } = useTheme();
  return (
    <View style={{ height: 32, width: 32, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 24, opacity: 1 }}>
      <Icon name="chevron-right" color={themeColors.primary} size={24} />
    </View>
  );
};

const PreviousButton = () => {
  const { colors: themeColors } = useTheme();
  return (
    <View style={{ height: 32, width: 32, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 24, opacity: 1 }}>
      <Icon name="chevron-left" color={themeColors.primary} size={24} />
    </View>
  );
};

const FlashCard = ({ item }) => {
  return (
    <React.Fragment>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Image source={{ uri: item.imageUrl }} style={{ height: '100%', width: '100%' }} resizeMode="cover" />
      </View>
      <View style={{ height: 144, backgroundColor: 'white', justifyContent: 'flex-start', alignItems: 'center' }}>
        <View style={{ marginTop: 40, paddingVertical: 8, paddingHorizontal: 24, alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontFamily: 'Roboto-Medium', color: colors.PRIMARY_FONT }}>{item.word}</Text>
          <View height={4} />
          <Text style={{ fontSize: 13, fontFamily: 'Roboto-Regular', color: colors.DARK_GRAY }}>{item.example}</Text>
        </View>
        <TouchableOpacity
          style={{ marginBottom: 8 }}
          onPress={() => {
            const track = new Sound(item.audioUrl, null, (e) => {
              if (e) {
                console.log('error loading track:', e);
              } else {
                track.play((success) => {
                  if (success) {
                    console.log(success);
                  }
                });
              }
            });
          }}>
          <Icon name="ios-volume-medium-outline" type="ionicon" />
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};

export default function FlashCardScreen({ navigation, route }) {
  const { colors: themeColors } = useTheme();

  const [flashcards, setFlashcards] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    FLASHCARD_Service.getFlashCardsOfCategory(route.params.category.id).then((data) => {
      setFlashcards(data);
      setLoading(false);
    });
  }, []);

  return (
    <Container ready={!loading} style={{}}>
      <Swiper
        loop={false}
        showsButtons={true}
        showsPagination={true}
        nextButton={<NextButton />}
        prevButton={<PreviousButton />}
        dot={<Dot />}
        activeDotStyle={{ backgroundColor: themeColors.primary, marginTop: -180 }}
        onIndexChanged={(index) => {
          console.log(flashcards[index]);
        }}>
        {flashcards.map((item) => (
          <FlashCard item={item} />
        ))}
      </Swiper>
    </Container>
  );
}
