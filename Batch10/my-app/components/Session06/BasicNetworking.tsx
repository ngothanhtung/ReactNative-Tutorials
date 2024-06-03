import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {};
// https://jsonplaceholder.typicode.com/

const BasicNetworking = (props: Props) => {
  const [loading, setLoading] = React.useState(true);
  const [message, setMessage] = React.useState('');
  const [posts, setPosts] = React.useState([]);

  // Bước 0: Khởi tạo state và loading = true
  // Bước 1: Gọi API để lấy được data từ remote server
  // Bước 2: Lưu data vào state, set loading = false
  // Bước 3: Hiển thị data từ state ra màn hình (gắn vào FlatList)

  // Chỉ chạy 1 lần duy nhất khi component được mount
  React.useEffect(() => {
    // PROMISE: Mất 5s để lấy data từ server
    const url1 = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url1)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        // data cần thiết để hiển thị
        console.log(json);
        setPosts(json);
        setLoading(false);
        setMessage('');
      })
      .catch((error) => {
        setMessage('Có lỗi lấy dữ liệu từ server');
        // console.error(error);
      });

    const url2 = 'https://jsonplaceholder.typicode.com/todos';
    fetch(url2)
      .then((response) => {
        return response.json();
      })
      .then((json) => {})
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.post}>
        <Text style={styles.title}>{item.title}</Text>
        <Text>{item.body}</Text>
      </View>
    );
  };

  return (
    <View>
      {loading && (
        <View style={styles.loadingContainer}>
          <Text>Loading ...</Text>
        </View>
      )}
      {message?.length > 0 && (
        <View style={styles.messageContainer}>
          <Text>{message}</Text>
        </View>
      )}
      {!loading && (
        <FlatList
          data={posts}
          keyExtractor={(item: any) => {
            return item.id;
          }}
          renderItem={renderItem}
          ItemSeparatorComponent={() => {
            return <View style={{ height: 10 }} />;
          }}
        />
      )}
    </View>
  );
};

export default BasicNetworking;

const styles = StyleSheet.create({
  loadingContainer: {
    height: 100,
    backgroundColor: 'red',
  },
  messageContainer: {
    height: 100,
    backgroundColor: 'yellow',
  },
  post: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  title: {
    fontWeight: '700',
  },
});
