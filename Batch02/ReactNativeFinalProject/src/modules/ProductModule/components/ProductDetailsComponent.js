import React, { Component } from 'react';
import { View, Text, Dimensions, Image, ScrollView } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import Star from '../../../components/Star';
import Loading from '../../../components/Loading';

import colors from '../../../constants/colors';

const { width, height } = Dimensions.get('window');

export default class ProductComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    const product = this.props.navigation.state.params.product;
    this.props.getProduct(product._id);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {
          this.props.loading &&
          <Loading />
        }
        {
          this.props.loading === false && this.props.product &&
          <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
              <View style={{ flex: 1 }}>
                {/* IMAGE */}
                <View style={{ width: width, height: (height / 3), alignItems: 'center' }}>
                  <Image resizeMode="cover" source={{ uri: this.props.product.imageUrl }} style={{ height: (height / 3), width: '100%' }} />
                </View>
                {/* PRODUCT DETAILS */}
                <View style={{ paddingTop: 8 }}>
                  <View style={{ paddingHorizontal: 8 }}>
                    <View>
                      <Text style={{ color: '#182C61', fontWeight: '700' }}>{this.props.product.name}</Text>
                    </View>
                    <View>
                      <Text style={{ color: '#2C3A47', fontSize: 12 }}>{this.props.product.summary}</Text>
                    </View>
                    {/* PRICE */}
                    <View style={{ paddingVertical: 6 }}>
                      <Text style={{ color: '#6D214F', fontWeight: '700' }}>US ${this.props.product.price}</Text>
                    </View>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 0, flexDirection: 'row' }}>
                      <Star stars="******" />
                    </View>
                    <View style={{ marginTop: 6 }}>
                      <Text style={{ fontSize: 12, color: '#2C3A47' }}>Free shipping</Text>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
            <View style={{ flex: 0, padding: 8, flexDirection: 'row' }}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
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
                      // console.log(this.props.product);
                      this.props.addToCart(this.props.product, 1)
                    }} />
                </View>
                <View style={{ flex: 1 }}>
                  <Button title="BUY NOW"
                    icon={<Icon type='font-awesome' name="arrow-right" color="white" size={16} />}
                    iconRight
                    containerStyle={{ paddingLeft: 4 }}
                    titleStyle={{ color: 'white', fontSize: 12 }}
                    buttonStyle={{
                      height: 36,
                      borderRadius: 0,
                      backgroundColor: colors.lightPurpleColor,
                      shadowOffset: { height: 0, width: 0 },
                      shadowOpacity: 0,
                      elevation: 0
                    }}
                    onPress={() => { }} />
                </View>
              </View>
            </View>
          </View>
        }
      </View>
    );
  }
}
