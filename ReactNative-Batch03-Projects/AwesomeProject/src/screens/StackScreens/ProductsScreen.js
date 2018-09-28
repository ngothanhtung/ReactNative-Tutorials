import React, { Component } from 'react';
import { View, FlatList, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Star from '../../components/shared/Star';

import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

const url = 'https://slacklivechat.com/jsonplaceholder/products';

class Product extends Component {
  render() {
    return (

      <Card>
        <CardItem>
          <Body>
            <Text>{this.props.product.name}</Text>
          </Body>
        </CardItem>
        <CardItem cardBody>
          <Image source={{ uri: this.props.product.imageUrl }} style={{ height: 200, width: null, flex: 1 }} />             
        </CardItem>
        <CardItem>

          <Body>
            <Text>{this.props.product.price}</Text>
          </Body>
          <Right>
            <Star number={3} />
          </Right>
        </CardItem>
      </Card>
    );
  }
}

export default class ProductsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null
    }
  }

  componentWillMount() {
    axios.get(url).then(response => {
      const data = response.data;
      this.setState({ products: data });
      console.log(data);
    })
  }

  render() {
    return (
      <Container>
        <Content style={{ padding: 12 }}>
          <FlatList
            data={this.state.products}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) =>
              <Product navigation={this.props.navigation} product={item} />
            }
          />
        </Content>

      </Container>
    )
  }
}