import auth from '@react-native-firebase/auth';

function login(email, password) {
  return new Promise((resolve, reject) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

function register(email, password) {
  return new Promise((resolve, reject) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        resolve('User account created');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          reject('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          reject('That email address is invalid!');
        }

        console.error(error);
        reject(error);
      });
  });
}

export default {
  login,
  register,
};
