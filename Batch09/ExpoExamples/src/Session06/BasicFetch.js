import React, { Component } from 'react';
import { ScrollView, Image, View, FlatList, Dimensions, ActivityIndicator, StyleSheet } from 'react-native';

import GilroyText from '../Eatme/components/GilroyText';
import HeartButton from '../Eatme/components/HeartButton';
const url = 'https://training.softech.cloud/api/products';

class LoadingProducts extends Component {
  render() {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {[1, 2, 3].map((item) => {
          return (
            <View key={item} style={styles.productContainer}>
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator />
                <View style={{ height: 64 }}></View>
                <View style={{ height: 16, backgroundColor: '#bdc3c7' }}></View>
                <View style={{ height: 8 }}></View>
                <View style={{ marginHorizontal: 32, height: 8, backgroundColor: '#bdc3c7' }}></View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

export default class BasicFetch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      products: [],
    };
  }

  componentDidMount() {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        // JSON
        // json.products => []
        this.setState({ products: json.products, loading: false });
      });
  }

  renderItem = ({ item, index }) => {
    return (
      <View style={styles.productContainer}>
        <View style={styles.top}>
          <View>
            <GilroyText style={styles.caloriesText}>{this.props.calories} Calories</GilroyText>
          </View>

          <View>
            <HeartButton />
          </View>
        </View>
        <View>
          <Image source={{ uri: item.coverImageUrl }} style={styles.image} />
        </View>
        <GilroyText fontStyle='Medium' style={styles.productName}>
          {item.name}
        </GilroyText>
        <GilroyText fontStyle='Regular' style={styles.productDescription}>
          {this.props.description}
        </GilroyText>

        <GilroyText fontStyle='Bold' style={styles.productPrice}>
          $ {item.price}
        </GilroyText>
      </View>
    );
  };

  render() {
    return (
      <View>
        {this.state.loading && <LoadingProducts />}
        <FlatList
          data={this.state.products}
          keyExtractor={(item, index) => {
            return 'product-' + item.id;
          }}
          renderItem={this.renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          // ItemSeparatorComponent={() => {
          //   return <View style={{ width: 16 }} />;
          // }}
        />
      </View>
    );
  }
}

const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  productContainer: {
    width: (WIDTH - (24 + 35 + 16)) / 2,
    height: 221,
    backgroundColor: '#F5F5F8',
    borderRadius: 8,
    padding: 16,
    marginRight: 16,
  },
  top: {
    height: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    // backgroundColor: 'green',
  },

  image: {
    borderRadius: 12,
    marginVertical: 16,
    alignSelf: 'center',
    height: 80,
    width: 80,
    // backgroundColor: 'red',
  },
  caloriesText: {
    color: '#111A2C',
    fontSize: 10,
  },
  productName: {
    color: '#111A2C',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 4,
  },

  productDescription: {
    textAlign: 'center',
    fontSize: 10,
  },

  productPrice: {
    color: '#111A2C',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 8,
  },
});
