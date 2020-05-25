/* eslint-disable no-console */
import React from 'react';

export default () => {
  const [refreshCount, setRefreshCount] = React.useState(0);
  const [photos, setPhotos] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const refresh = () => {
    setRefreshCount(refreshCount + 1);
  };

  React.useEffect(() => {
    fetch('https://picsum.photos/v2/list')
      .then((response) => response.json())
      .then((json) => {
        setPhotos(json);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return [loading, photos, refresh];
};
