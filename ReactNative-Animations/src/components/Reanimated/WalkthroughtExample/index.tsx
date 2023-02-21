import { StyleSheet, Text, View, Dimensions, Animated } from 'react-native';
import React from 'react';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

type Props = {};

interface ItemInterface {
  id: number;
  name: string;
}

const slides = [
  {
    id: 1,
    name: 'Screen 1',
    color: 'white',
  },
  {
    id: 2,
    name: 'Screen 2',
    color: 'green',
  },
  {
    id: 3,
    name: 'Screen 3',
    color: 'orange',
  },
];

const PAGE_WIDTH = Dimensions.get('window').width;
const DOT_SIZE = 8;
const DOT_SPACING = 8;
const DOT_INDICATOR_SIZE = DOT_SIZE + DOT_SPACING;

const WalkthroughtExample = (props: Props) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const refFlatList = React.useRef().current;
  const viewConfig = React.useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={refFlatList}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        scrollEventThrottle={50}
        data={slides}
        keyExtractor={(item: ItemInterface) => `screen-${item.id}`}
        snapToInterval={PAGE_WIDTH}
        decelerationRate="normal"
        renderItem={({ item }) => {
          return (
            <View style={[styles.screen, { backgroundColor: item.color }]}>
              <Text>{item.name}</Text>
            </View>
          );
        }}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: true,
        })}
        viewabilityConfig={viewConfig}
      />
      <View style={{ width: '100%', position: 'absolute', bottom: 0, alignItems: 'center' }}>
        <View style={styles.pageination}>
          {slides.map((slide, index) => {
            return <View key={`dot-${slide.id}`} style={[styles.dot]}></View>;
          })}

          <Animated.View
            style={[
              styles.dotIndicator,
              {
                transform: [
                  {
                    translateX: Animated.divide(scrollX, PAGE_WIDTH).interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, DOT_INDICATOR_SIZE],
                    }),
                  },
                ],
              },
            ]}
          />
        </View>
      </View>
    </View>
  );
};

export default WalkthroughtExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  screen: {
    flex: 1,
    width: WIDTH,
    // height: HEIGHT,
  },

  pageination: {
    flexDirection: 'row',
    bottom: 12,
  },

  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE,
    marginRight: DOT_SPACING,
    backgroundColor: '#333',
  },

  dotIndicator: {
    width: DOT_INDICATOR_SIZE,
    height: DOT_INDICATOR_SIZE,
    borderRadius: DOT_INDICATOR_SIZE,
    borderWidth: 1,
    borderColor: '#333',
    position: 'absolute',
    top: -DOT_SIZE / 2,
    left: -DOT_SIZE / 2,
  },
});
