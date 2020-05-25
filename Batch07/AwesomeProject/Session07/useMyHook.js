import React from 'react';

export default () => {
  const [refreshCount, setRefreshCount] = React.useState(0);
  const [photos, setPhotos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const refresh = () => {
    setRefreshCount(refreshCount + 1);
  };

  React.useEffect(() => {
    fetch('https://picsum.photos/v2/list')
      .then((response) => response.json())
      .then((json) => {
        setPhotos(json);
        setLoading(false);
        console.log(json);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [refreshCount]);

  return [loading, photos, refresh];
};
