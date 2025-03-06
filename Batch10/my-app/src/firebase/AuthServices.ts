import { db, auth } from '@/firebase/initializeApp';
import { onSnapshot, writeBatch, doc, getDoc, addDoc, updateDoc, collection, serverTimestamp, deleteField, query, getDocs } from 'firebase/firestore';
import { signInWithEmailAndPassword } from 'firebase/auth';

/**
 * Đăng nhập
 */
export async function signIn({ email, password }: { email: string; password: string }): Promise<any> {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        resolve(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        reject({ errorMessage, errorCode });
      });
  });
}
/**
 * Đăng xuất
 */
export async function signOut(): Promise<any> {
  return new Promise((resolve, reject) => {
    auth
      .signOut()
      .then(() => {
        resolve({ message: 'Sign-out successful.' });
      })
      .catch((error) => {
        reject(error);
      });
  });
}

/**
 * Lấy thông tin profile
 */
export async function getProfile({ uid }: { uid: string }): Promise<any> {
  return new Promise((resolve, reject) => {
    const docRef = doc(db, 'profiles', uid);
    getDoc(docRef)
      .then((documentSnapshot) => {
        if (documentSnapshot.exists()) {
          resolve({ ...documentSnapshot.data(), id: documentSnapshot.id });
        }
        resolve(null);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
