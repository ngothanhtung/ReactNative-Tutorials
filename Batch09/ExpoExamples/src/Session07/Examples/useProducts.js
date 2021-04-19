import React from 'react';
import axios from 'axios';
const url = 'https://training.softech.cloud/api/products';

export default () => {
  const [loading, setLoading] = React.useState(true);
  const [products, setProducts] = React.useState([]);

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
  }, []);

  return [loading, products];
};
