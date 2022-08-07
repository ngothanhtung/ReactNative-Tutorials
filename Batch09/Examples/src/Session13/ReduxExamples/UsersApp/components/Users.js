/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUserAsync, getUsersAsync, selectUser } from '../actions';

function Users() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.userReducer);

  React.useEffect(() => {
    // dispatch an action of redux-thunk
    dispatch(getUsersAsync());
  }, []);

  return (
    <View>
      {loading && <Text>Loading ...</Text>}
      <FlatList
        data={users}
        keyExtractor={(item, index) => `user-${item._id}`}
        renderItem={({ item, index }) => {
          return (
            <View>
              <Text>{item.username}</Text>
              <Button
                onPress={() => {
                  dispatch(deleteUserAsync(item._id));
                }}
              >
                Delete
              </Button>
            </View>
          );
        }}
      />
      {error && <Text>{error.toString()}</Text>}
    </View>
  );
}

export default Users;
