import { addDoc, collection, deleteDoc, doc, getDocs, query, serverTimestamp, Timestamp, updateDoc, where } from 'firebase/firestore';

import { db } from '@/firebase/initializeApp';
import { Comment, History, Task } from '@/types';

import { getProfile } from './AuthServices';

export async function createTask(task: Task): Promise<any> {
  return new Promise(async (resolve, reject) => {
    // Prepare data
    const data = {
      ...task,
      createdTime: serverTimestamp(),
      updatedTime: serverTimestamp(),
      startDate: task.startDate ? (task.startDate instanceof Date ? Timestamp.fromDate(task.startDate) : task.startDate) : null,
      dueDate: task.dueDate ? (task.dueDate instanceof Date ? Timestamp.fromDate(task.dueDate) : task.dueDate) : null,
      completedDate: task.completedDate ? (task.completedDate instanceof Date ? Timestamp.fromDate(task.completedDate) : task.completedDate) : null,

      project: task.project ? doc(db, 'projects', task.project) : null,
      uid: task.uid ? doc(db, 'profiles', task.uid) : null,
      assignee: task.assignee ? doc(db, 'profiles', task.assignee) : null,
    };

    addDoc(collection(db, 'tasks'), data)
      .then((docRef) => {
        resolve(docRef.id);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export async function updateTask({ id, task }: { id: string; task: Task }): Promise<any> {
  return new Promise(async (resolve, reject) => {
    updateDoc(doc(db, 'tasks', id), {
      ...task,
      updatedTime: serverTimestamp(),
    })
      .then(() => {
        resolve(task);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export async function deleteTask({ id }: { id: string }): Promise<any> {
  return new Promise(async (resolve, reject) => {
    deleteDoc(doc(db, 'tasks', id))
      .then(() => {
        resolve(id);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export async function createSubTask({ taskId, subTask }: { taskId: string; subTask: Task }): Promise<any> {
  return new Promise(async (resolve, reject) => {
    // Prepare data
    const data = {
      ...subTask,
      createdTime: serverTimestamp(),
      updatedTime: serverTimestamp(),
      startDate: subTask.startDate ? (subTask.startDate instanceof Date ? Timestamp.fromDate(subTask.startDate) : subTask.startDate) : null,
      dueDate: subTask.dueDate ? (subTask.dueDate instanceof Date ? Timestamp.fromDate(subTask.dueDate) : subTask.dueDate) : null,
      completedDate: subTask.completedDate ? (subTask.completedDate instanceof Date ? Timestamp.fromDate(subTask.completedDate) : subTask.completedDate) : null,
      uid: subTask.uid ? doc(db, 'profiles', subTask.uid) : null,
      assignee: subTask.assignee ? doc(db, 'profiles', subTask.assignee) : null,
    };

    addDoc(collection(db, 'tasks', `${taskId}/subTasks`), data)
      .then((docRef) => {
        resolve(docRef.id);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export async function updateSubTask({ taskId, subTaskId, subTask }: { taskId: string; subTaskId: string; subTask: Task }): Promise<any> {
  return new Promise(async (resolve, reject) => {
    updateDoc(doc(db, 'tasks', `${taskId}/subTasks`, subTaskId), {
      ...subTask,
      updatedTime: serverTimestamp(),
    })
      .then(() => {
        resolve(subTask);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export async function createComment({ taskId, comment }: { taskId: string; comment: Comment }): Promise<any> {
  return new Promise(async (resolve, reject) => {
    // Prepare data
    const data = {
      ...comment,
      createdTime: serverTimestamp(),
      updatedTime: serverTimestamp(),
      uid: comment.uid ? doc(db, 'profiles', comment.uid) : null,
    };

    addDoc(collection(db, 'tasks', `${taskId}/comments`), data)
      .then((docRef) => {
        resolve(docRef.id);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export async function updateComment({ taskId, commentId, comment }: { taskId: string; commentId: string; comment: Comment }): Promise<any> {
  return new Promise(async (resolve, reject) => {
    updateDoc(doc(db, 'tasks', `${taskId}/comments`, commentId), {
      ...comment,
      updatedTime: serverTimestamp(),
    })
      .then(() => {
        resolve(comment);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export async function createHistory({ taskId, history }: { taskId: string; history: History }): Promise<any> {
  return new Promise(async (resolve, reject) => {
    addDoc(collection(db, 'tasks', `${taskId}/histories`), history)
      .then((docRef) => {
        resolve(docRef.id);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

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

export async function getSubTasks({ taskId }: { taskId: string }): Promise<any> {
  return new Promise(async (resolve, reject) => {
    const ref = collection(db, 'tasks', `${taskId}/subTasks`);

    const items: any[] = [];
    getDocs(ref)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const item = doc.data();
          item.id = doc.id;
          items.push(item);
        });
        resolve(items);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export async function getComments({ taskId }: { taskId: string }): Promise<any> {
  return new Promise(async (resolve, reject) => {
    const ref = collection(db, 'tasks', `${taskId}/comments`);

    const items: any[] = [];
    getDocs(ref)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const item = doc.data();
          item.id = doc.id;
          items.push(item);
        });
        resolve(items);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export async function getHistories({ taskId }: { taskId: string }): Promise<any> {
  return new Promise(async (resolve, reject) => {
    const ref = collection(db, 'tasks', `${taskId}/histories`);

    const items: any[] = [];
    getDocs(ref)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const item = doc.data();
          item.id = doc.id;
          items.push(item);
        });
        resolve(items);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
