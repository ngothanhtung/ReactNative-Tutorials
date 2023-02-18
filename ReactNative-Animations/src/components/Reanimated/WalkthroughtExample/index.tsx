import { StyleSheet, Text, View, Dimensions, Animated, ViewToken } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

type Props = {};

interface ItemInterface {
  id: number;
  name: string;
}

const data = [
  {
    id: 1,
    name: 'Screen 1',
    color: 'blue',
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

const WalkthroughtExample = (props: Props) => {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const refFlatList = React.useRef().current;

  const viewableItemsChanged = React.useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems[0].index) {
      console.log('viewableItems[0].index', viewableItems);
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfig = React.useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View style={styles.container}>
      <FlatList
        ref={refFlatList}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        scrollEventThrottle={32}
        data={data}
        keyExtractor={(item: ItemInterface) => `screen-${item.id}`}
        renderItem={({ item }) => {
          return (
            <View style={[styles.screen, { backgroundColor: item.color }]}>
              <Text>{item.name}</Text>
            </View>
          );
        }}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false,
        })}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
      />
      <View style={{ height: 60, position: 'absolute', backgroundColor: 'red' }}></View>
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
});
