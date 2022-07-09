import React from 'react';
import axios from 'axios';

var config = {
  method: 'get',
  url: 'https://training.softech.cloud/api/training/users/auth/api-key',
  headers: {
    'x-api-key': 'aptech-tester-pro',
  },
};

export default () => {
  const [refresh, setRefresh] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [users, setUsers] = React.useState([]);

  const onRefresh = () => {
    setRefresh(refresh + 1);
  };

  React.useEffect(() => {
    setLoading(true);
    axios(config)
      .then((result) => {
        setUsers(result.data);
        setLoading(false);
        console.log('DONE');
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [refresh]);

  return [loading, users, onRefresh];
};
