import React, { Component } from 'react';
import { Text, View, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import axiosClient from '../../configs/axiosClient';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      loadingMore: false,
      refreshing: false,
      canLoadMore: true,
      page: 1,
      size: 3,
      products: [],
    };
  }

  _getProducts = () => {
    const { page } = this.state;
    axiosClient
      .get(`http://localhost:3000/products/${this.state.page}/${this.state.size}`)
      .then(response => {
        if (response.data.result.length === 0) {
          this.setState({ canLoadMore: false });
        }
        this.setState((prevState, nextProps) => ({
          products: page === 1 ? response.data.result : [...this.state.products, ...response.data.result],
          loading: false,
          loadingMore: false,
          refreshing: false,
        }));
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };

  _loadMore = () => {
    if (this.state.canLoadMore) {
      this.setState(
        (prevState, nextProps) => ({
          page: prevState.page + 1,
          loadingMore: true,
        }),
        () => {
          this._getProducts();
        },
      );
    }
  };

  componentDidMount() {
    this._getProducts();
  }

  _renderItem = ({ item, index }) => {
    return (
      <View style={{ height: 1000, backgroundColor: 'yellow', justifyContent: 'center', borderBottomWidth: 1 }}>
        <Text>
          {index + 1}. {item.name}
        </Text>
      </View>
    );
  };

  _renderFooter = () => {
    if (!this.state.loadingMore) return null;

    return (
      <View
        style={{
          position: 'relative',
          paddingVertical: 20,
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <ActivityIndicator animating />
      </View>
    );
  };

  _refresh = () => {
    this.setState(
      {
        page: 1,
        refreshing: true,
      },
      () => {
        this._getProducts();
      },
    );
  };

  render() {
    return this.state.loading ? (
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <Text style={{ alignSelf: 'center' }}>Loading products</Text>
          <ActivityIndicator />
        </View>
      </SafeAreaView>
    ) : (
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          style={{ margin: 12, flex: 1, height: '100%' }}
          data={this.state.products}
          keyExtractor={(item, index) => item._id.toString()}
          renderItem={this._renderItem}
          ListFooterComponent={this._renderFooter}
          onEndReached={this._loadMore}
          onEndReachedThreshold={0.5}
          onRefresh={this._refresh}
          refreshing={this.state.refreshing}
          initialNumToRender={10}
        />
      </SafeAreaView>
    );
  }
}
