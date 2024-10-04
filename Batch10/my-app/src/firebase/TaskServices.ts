import { db, auth } from '@/firebase/initializeApp';
import { onSnapshot, writeBatch, doc, getDoc, addDoc, updateDoc, collection, collectionGroup, serverTimestamp, deleteField, query, getDocs, where } from 'firebase/firestore';
import { getProfile } from './AuthServices';

/**
 * Get tasks by assigned user
 */
export async function getTasks({ uid }: { uid: string }): Promise<any> {
  return new Promise(async (resolve, reject) => {
    // Get profile
    const profile = await getProfile({ uid });
    const userRef = doc(db, 'profiles', uid);

    const ref = collection(db, 'tasks');
    const q = query(ref, where('uid', '==', userRef));

    const tasks: any[] = [];
    getDocs(q)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const task = doc.data();
          task.id = doc.id;
          task.uid = profile;
          tasks.push(task);
        });
        resolve(tasks);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export async function getComments({ taskId }: { taskId: string }): Promise<any> {
  return new Promise(async (resolve, reject) => {
    const ref = collection(db, 'tasks', `${taskId}/comments`);

    const comments: any[] = [];
    getDocs(ref)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const comment = doc.data();
          comment.id = doc.id;
          comments.push(comment);
        });
        resolve(comments);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
