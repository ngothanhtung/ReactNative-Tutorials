import React, { Component } from 'react';
import { RefreshControl, Dimensions, View, Text, FlatList, TouchableOpacity, Image, } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import Star from '../../../components/Star';
import colors from '../../../constants/colors';

const { width, height } = Dimensions.get('window');

export default class ProductsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'grid',
    }
    this.props.getProducts();
  }

  renderListItem({ item }) {
    return (
      <View style={{ flex: 1, paddingHorizontal: 8, marginBottom: 32 }}>
        <TouchableOpacity style={{ flexDirection: 'row', }}
          onPress={() => {
            this.props.navigation.navigate('ProductDetailsScreen', { product: item });
          }}>
          {/* IMAGE */}
          <View style={{ width: (width * 35 / 100), height: (width * 35 / 100) }}>
            <Image resizeMode="cover" source={{ uri: item.imageUrl }} style={{ height: '100%', width: '100%' }} />
          </View>
          {/* PRODUCT DETAILS */}
          <View style={{ flex: 1, paddingHorizontal: 6 }}>
            <View>
              <Text style={{ color: '#182C61', fontWeight: '700' }}>{item.name}</Text>
            </View>
            <View>
              <Text style={{ color: '#2C3A47', fontSize: 12 }}>{item.summary}</Text>
            </View>
            {/* PRICE */}
            <View style={{ paddingVertical: 2 }}>
              <Text style={{ color: '#6D214F', fontWeight: '700' }}>US ${item.price}</Text>
            </View>
            <View style={{ paddingVertical: 2 }}>
              <Text style={{ color: '#6D214F', fontSize: 12 }}>Discount: {item.discount}%</Text>
            </View>
            <View style={{ flex: 1 }}></View>
            <View style={{ flex: 0, flexDirection: 'row' }}>
              <Star stars="*****" />
            </View>
            <View style={{ marginTop: 6 }}>
              <Text style={{ fontSize: 12, color: '#2C3A47' }}>
                Free shipping
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  renderGridItem({ item }) {
    return (
      <View style={{ width: width / 2, marginBottom: 32 }}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('ProductDetailsScreen', { product: item });
          }}>
          {/* IMAGE */}
          <View style={{ width: width / 2, height: (width / 2) - 50, alignItems: 'center' }}>
            <Image resizeMode="cover" source={{ uri: item.imageUrl }} style={{ height: (width / 2) - 50, width: (width / 2) - 16 }} />
          </View>
          {/* PRODUCT DETAILS */}
          <View style={{ width: width / 2, paddingTop: 8 }}>
            <View style={{ paddingHorizontal: 8 }}>
              <View>
                <Text style={{ color: '#182C61', fontWeight: '700' }}>{item.name}</Text>
              </View>
              <View>
                <Text style={{ color: '#2C3A47', fontSize: 12 }}>{item.summary}</Text>
              </View>
              {/* PRICE */}
              <View style={{ paddingVertical: 2 }}>
                <Text style={{ color: '#6D214F', fontWeight: '700' }}>US ${item.price}</Text>
              </View>
              <View style={{ paddingVertical: 2 }}>
                <Text style={{ color: '#6D214F', fontSize: 12 }}>Discount: {item.discount}%</Text>
              </View>
              <View style={{ flex: 1 }}></View>
              <View style={{ flex: 0, flexDirection: 'row' }}>
                <Star stars="*****" />
              </View>
              <View style={{ marginTop: 6 }}>
                <Text style={{ fontSize: 12, color: '#2C3A47' }}>
                  Free shipping
              </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{padding: 8}}>
          <Button title="ADD TO CART"
          icon={<Icon type='font-awesome' name="shopping-cart" color="white" size={16} />}
          containerStyle={{ paddingRight: 4 }}
          titleStyle={{ color: 'white', fontSize: 12 }}
          buttonStyle={{
            height: 36,
            borderRadius: 0,
            backgroundColor: colors.lightPurpleColor,
            shadowOffset: { height: 0, width: 0 },
            shadowOpacity: 0,
            elevation: 0
          }}
          onPress={() => {            
            this.props.addToCart(item, 1)
          }} />
        </View>        
      </View>
    );
  }

  renderItem({ item }) {
    return this.state.mode === 'list' ? this.renderListItem({ item }) : this.renderGridItem({ item });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* SELECT MODE */}
        <View style={{ height: 32, backgroundColor: '#ffffff', marginBottom: 4 }}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', paddingRight: 6 }}>
            <TouchableOpacity onPress={() => { this.setState({ mode: 'grid' }) }}>
              <Icon type="material-community" name="apps" size={20} style={this.state.mode === 'grid' ? { color: '#6D214F' } : { color: '#CAD3C8' }} />
            </TouchableOpacity>

            <View style={{ width: 2 }} />

            <TouchableOpacity onPress={() => { this.setState({ mode: 'list' }) }}>
              <Icon type="material-community" name="view-sequential" size={20} style={this.state.mode === 'list' ? { color: '#6D214F' } : { color: '#CAD3C8' }} />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={this.props.loading}
              onRefresh={() => {
                this.props.getProducts();
              }}
            />
          }
          data={this.props.products}
          renderItem={(item) => (this.renderItem(item))}
          keyExtractor={(item, index) => (index.toString())}
          numColumns={this.state.mode === 'list' ? 1 : 2}
          key={this.state.mode === 'list' ? 1 : 0}
        />
      </View>
    );
  }
}