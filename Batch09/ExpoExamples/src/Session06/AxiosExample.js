// https://github.com/axios/axios
// yarn add axios hoặc npm install --save axios

import axios from 'axios';
import React, { Component } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const url = 'https://training.softech.cloud/api/products';

export default class AxiosExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      products: [],
    };
  }

  componentDidMount() {
    this.getProducts();
    this.signInWithAxios();
  }

  getProducts = () => {
    axios
      .get(url)
      .then((result) => {
        this.setState({ products: result.data.products, loading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  signInWithAxios = () => {
    // before
    this.setState({ loading: true });
    // axios
    const url = 'https://training.softech.cloud/api/users/login';
    const data = {
      email: 'ngothanhtung.it@gmail.com',
      password: 'hyhy2q3v',
    };

    axios
      .post(url, data)
      .then((response) => {
        this.setState({ loading: false });
        if (response.data.ok) {
          console.log('Đăng nhập thành công');
        } else {
          console.log('Đăng nhập không thành công');
        }
      })
      .catch((error) => {
        this.setState({ loading: false });
        console.log(error);
      });
  };

  renderItem = ({ item, index }) => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontWeight: '700' }}>{item.name}</Text>
        <Text style={{ fontWeight: '700' }}>${item.price}</Text>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, padding: 24 }}>
        <FlatList
          data={this.state.products}
          keyExtractor={(item, index) => {
            return 'product-' + item.id;
          }}
          renderItem={this.renderItem}
          showsHorizontalScrollIndicator={true}
          ItemSeparatorComponent={() => {
            return <View style={{ height: 8 }} />;
          }}
        />
      </SafeAreaView>
    );
  }
}
