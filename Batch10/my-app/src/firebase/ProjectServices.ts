import { addDoc, collection, deleteDoc, doc, getDocs, query, serverTimestamp, Timestamp, updateDoc, where } from 'firebase/firestore';

import { db } from '@/firebase/initializeApp';
import { Comment, History, Project, Task } from '@/types';

import { getProfile } from './AuthServices';

export async function createProject({ project }: { project: Project }): Promise<any> {
  return new Promise(async (resolve, reject) => {
    const data = {
      ...project,
      createdTime: serverTimestamp(),
      updatedTime: serverTimestamp(),
    };

    addDoc(collection(db, 'projects'), data)
      .then((docRef) => {
        resolve(docRef.id);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export async function updateProject({ id, project }: { id: string; project: Project }): Promise<any> {
  return new Promise(async (resolve, reject) => {
    updateDoc(doc(db, 'projects', id), {
      ...project,
      updatedTime: serverTimestamp(),
    })
      .then(() => {
        resolve(project);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export async function deleteProject({ id }: { id: string }): Promise<any> {
  return new Promise(async (resolve, reject) => {
    deleteDoc(doc(db, 'projects', id))
      .then(() => {
        resolve(id);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
