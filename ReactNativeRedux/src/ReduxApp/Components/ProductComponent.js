import React, { Component } from 'react';
import { StyleSheet, Button, View, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ShoppingCartTotalComponent from './ShoppingCartTotalComponent';

const styles = StyleSheet.create({
  text: {
    fontSize: 12
  }
});

export default class ProductComponent extends Component {
  static navigationOptions = ({ navigation }) => (
    {
      title: 'Products',
      headerRight: <ShoppingCartTotalComponent />
    }
  );

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.getProducts();
  }

  formatCurrency(number) {
    var options = { style: 'currency', currency: 'USD', minimumFractionDigits: 0 };
    var numberFormat = new Intl.NumberFormat('en-US', options);
    return numberFormat.format(number);
  }

  renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, marginVertical: 2 }}>
        <View style={{ width: '100%', flexDirection: 'row' }}>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[styles.text, { fontWeight: '700' }]}>{item.name}</Text>
          </View>
          <View style={{ justifyContent: 'center', paddingRight: 8 }}>
            <Text style={styles.text}>{this.formatCurrency(item.price)}</Text>
          </View>

          <View style={{ justifyContent: 'center', paddingRight: 8 }}>
            <Text style={styles.text}>{item.discount}%</Text>
          </View>
          <TouchableOpacity
            style={{ padding: 4 }}
            onPress={() => {
              this.props.addToCart(item, 1);
            }}>
            <Icon name="cart" size={16} color="#0984e3" />
          </TouchableOpacity>

        </View>
      </View>
    );
  }

  render() {
    return (
      <View>
        <Text style={{ fontWeight: '700', fontSize: 16 }}>Products</Text>
        <View style={{ backgroundColor: '#b2bec3', height: 1, marginVertical: 4 }} />
        <ScrollView>
          <FlatList style={{ marginLeft: 2, marginRight: 2 }}
            data={this.props.products}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
      </View>
    );
  }
}
