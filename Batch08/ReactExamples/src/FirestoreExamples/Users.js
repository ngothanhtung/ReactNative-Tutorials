import React from 'react';
import { firestore } from '../firebase';

export default function Products() {
  const [loading, setLoading] = React.useState(true);
  const [users, setUsers] = React.useState([]);

  const getUsers = () => {
    const data = [];
    firestore
      .collection('Users')
      // Sắp xếp asc / desc
      .orderBy('name', 'asc')
      .get()
      .then((querySnapshot) => {
        // lặp qua từng document
        querySnapshot.forEach((documentSnapshot) => {
          const user = documentSnapshot.data();
          user.id = documentSnapshot.id;
          data.push(user);
        });
        // set state
        setLoading(false);
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setUsers([]);
      });
  };

  React.useEffect(() => {
    getUsers();
  }, []);
  return (
    <ul>
      {users.map((u) => {
        return <li key={u.id}>{u.name}</li>;
      })}
    </ul>
  );
}
