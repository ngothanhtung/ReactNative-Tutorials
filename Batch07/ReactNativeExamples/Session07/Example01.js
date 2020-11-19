import React from 'react';
import {View, Text, Button} from 'react-native';

const Header = ({text}) => {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};

const Example01 = () => {
  const [count, setCount] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [photos, setPhotos] = React.useState([]);

  const getPhotos = () => {
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
  };

  React.useEffect(getPhotos, []);

  return (
    <View>
      <Header text="Hello Hooks"></Header>
      <Button
        title="Click me"
        onPress={() => {
          setCount(count + 1);
        }}
      />
      <Text>{count}</Text>
    </View>
  );
};

export default Example01;
