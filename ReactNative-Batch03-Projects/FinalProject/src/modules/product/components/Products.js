import React, { Component } from 'react';
import { FlatList, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

import { connect } from 'react-redux';
import { getProducts } from '../actions';


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
            {/* <Star number={3} /> */}
          </Right>
        </CardItem>
      </Card>
    );
  }
}

class Products extends Component {
  componentWillMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <Container>
        <Content style={{ padding: 12 }}>
          <FlatList
            data={this.props.products}
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



// Nối các states vào props (values) của View Component
const mapStateToProps = (state) => ({
  products: state.productReducer.products
});
// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);

