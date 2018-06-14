import React, { Component } from 'react';
import { Dimensions, View, Text, StyleSheet, FlatList, TouchableOpacity, TouchableWithoutFeedback, Image, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const { width, height } = Dimensions.get('window');

export default class ProductsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'grid',
    }

    this.props.getProducts();

  }
  renderItem({ item }) {
    return (
      <View style={{ flex: 1, margin: 2 }}>
        <View style={{ width: '100%', height: this.state.mode === 'list' ? height / 3 : height / 6 }}>
          <TouchableOpacity onPress={() => {
            // NAVIGATE TO OTHER SCREEn WITH PARAMETERS
            this.props.navigation.navigate('ProductDetailScreen', { product: item });
          }}>
            <Image resizeMode="cover" source={{ uri: 'https://picsum.photos/600/600' }} style={{ height: '100%', width: '100%' }} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={{ marginTop: 24 }}>
        {
          this.props.loading && <ActivityIndicator />
        }
        {
          (this.props.loading === false) &&
          <View>
            {/* SELECT MODE */}
            <View style={{ height: 40, backgroundColor: '#ecf0f1', marginBottom: 4 }}>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', paddingRight: 6 }}>
                <TouchableOpacity onPress={() => { this.setState({ mode: 'grid' }) }}>
                  <Icon name="apps" size={24} style={this.state.mode === 'grid' ? { color: '#2d3436' } : { color: 'gray' }} />
                </TouchableOpacity>

                <View style={{ width: 2 }} />

                <TouchableOpacity onPress={() => { this.setState({ mode: 'list' }) }}>
                  <Icon name="view-sequential" size={24} style={this.state.mode === 'list' ? { color: '#2d3436' } : { color: 'gray' }} />
                </TouchableOpacity>
              </View>
            </View>
            <FlatList
              data={this.props.products}
              renderItem={(item) => (this.renderItem(item))}
              keyExtractor={(item, index) => (index.toString())}
              numColumns={this.state.mode === 'list' ? 1 : 3}
              key={this.state.mode === 'list' ? 1 : 0}
            />
          </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  }
});