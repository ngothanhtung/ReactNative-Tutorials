import React from 'react';
import axios from 'axios';
const url = 'https://training.softech.cloud/api/products';

export default () => {
  const [refresh, setRefresh] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [products, setProducts] = React.useState([]);

  const onRefresh = () => {
    setRefresh(refresh + 1);
  };

  React.useEffect(() => {
    axios
      .get(url)
      .then((result) => {
        setProducts(result.data.products);
        setLoading(false);
        console.log('DONE');
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh]);

  return [loading, products, onRefresh];
};
