import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Example01() {
  // const [count, setCount] = React.useState(0);
  let [refresh, setRefresh] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [photos, setPhotos] = React.useState([]);

  // const [networkStatus] = FB.useNetwork(false);

  // ComponentDidmMount + ComponentWillUnmount
  React.useEffect(() => {
    // ComponentDidMount
    setLoading(true);
    fetch('https://picsum.photos/v2/list')
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setPhotos(json);
        console.log(json);
      })
      .catch((error) => {
        setLoading(false);
      });

    // ComponentWillUnmount
    return () => {
      //  ComponentWillUnmount
    };
  }, [refresh]);

  return (
    <View>
      <Text />
      <Button
        title="Refresh"
        onPress={() => {
          setRefresh(refresh++);
        }}
      />
    </View>
  );
}
