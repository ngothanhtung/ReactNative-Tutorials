import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, serverTimestamp, Timestamp, updateDoc, where } from 'firebase/firestore';

import { db } from '@/firebase/initializeApp';
import { Comment, History, Member, Project, Task } from '@/types';

import { getProfile } from './AuthServices';

export async function createProject(project: Project): Promise<any> {
  return new Promise(async (resolve, reject) => {
    const members = project.members?.map((member) => {
      return {
        ...member,
        uid: doc(db, 'profiles', member.uid),
      };
    });

    const data = {
      ...project,
      createdTime: serverTimestamp(),
      updatedTime: serverTimestamp(),
      members: members ?? [],
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

export async function getProject({ id }: { id: string }): Promise<any> {
  return new Promise(async (resolve, reject) => {
    const ref = doc(db, 'projects', id);
    const docSnapshot = await getDoc(ref);

    if (docSnapshot.exists()) {
      resolve(docSnapshot.data());
    } else {
      reject(null);
    }
  });
}

export async function addMembersToProject({ id, members }: { id: string; members: Member[] }): Promise<any> {
  return new Promise(async (resolve, reject) => {
    const projectData = await getProject({ id });
    const oldMembers = projectData.members ?? [];

    const newMembers = members.map((member: Member) => {
      return {
        ...member,
        uid: doc(db, 'profiles', member.uid),
      };
    });

    const mergedMembers: Member[] = [];
    oldMembers.forEach((member: Member) => {
      mergedMembers.push(member);
    });

    newMembers.forEach((newMember: any) => {
      if (!mergedMembers.find((member) => member.uid.path === newMember.uid.path)) {
        mergedMembers.push(newMember);
      }
    });

    updateDoc(doc(db, 'projects', id), {
      members: mergedMembers,
    })
      .then(() => {
        resolve(true);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export async function removeMemberFromProject({ id, memberId }: { id: string; memberId: string }): Promise<any> {
  return new Promise(async (resolve, reject) => {
    const projectData = await getProject({ id });
    const oldMembers = projectData.members ?? [];

    const newMembers = oldMembers.filter((member: Member) => member.uid.path !== `profiles/${memberId}`);

    updateDoc(doc(db, 'projects', id), {
      members: newMembers,
    })
      .then(() => {
        resolve(true);
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
