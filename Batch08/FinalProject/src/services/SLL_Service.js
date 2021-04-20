import firestore from '@react-native-firebase/firestore';

function getStudentsOfParent(id) {
  return new Promise(async (resolve, reject) => {
    firestore()
      .collection('SLL-Parents')
      .doc(id)
      .get()
      .then((documentSnapshot) => {
        if (documentSnapshot.exists) {
          const parent = documentSnapshot.data();
          parent.id = documentSnapshot.id;

          // GET STUDENTS
          const getStudents = parent.students.map((studentRef) => {
            return studentRef.get().then((studentDocumentSnapshot) => {
              const student = studentDocumentSnapshot.data();
              student.id = studentDocumentSnapshot.id;
              return student;
            });
          });

          // WAITING FOR GET ALL STUDENTS
          Promise.all(getStudents).then((result) => {
            parent.students = result;
            resolve(parent);
          });
        } else {
          resolve(null);
        }
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

function getSchedulesOfClass(id, year) {
  return new Promise((resolve, reject) => {
    const classRef = firestore().collection('SLL-Classes').doc(id);

    firestore()
      .collection('SLL-Schedules')
      .where('class', '==', classRef)
      .where('year', '==', year)
      .where('status', '==', true)
      .get()
      .then((querySnapshot) => {
        const schedules = [];
        querySnapshot.forEach((documentSnapshot) => {
          const schedule = documentSnapshot.data();
          schedule.id = documentSnapshot.id;
          schedules.push(schedule);
        });

        resolve(schedules);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

function getScoresOfStudent(id, year) {
  return new Promise((resolve, reject) => {
    const studentRef = firestore().collection('SLL-Students').doc(id);

    firestore()
      .collection('SLL-Scores')
      .where('student', '==', studentRef)
      .where('year', '==', year)
      .get()
      .then((querySnapshot) => {
        const scores = [];
        querySnapshot.forEach((documentSnapshot) => {
          const score = documentSnapshot.data();
          score.id = documentSnapshot.id;
          scores.push(score);
        });

        resolve(scores);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

function getNotifications() {
  return new Promise((resolve, reject) => {
    firestore()
      .collection('SLL-Announcements')
      .where('type', '==', 'public')
      // .orderBy('createdTime', 'desc')
      .get()
      .then((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((documentSnapshot) => {
          const item = documentSnapshot.data();
          item.id = documentSnapshot.id;
          items.push(item);
        });

        resolve(items);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

function getGeneralHealthOfStudent(id) {
  return new Promise((resolve, reject) => {
    const studentRef = firestore().collection('SLL-Students').doc(id);

    firestore()
      .collection('SLL-HealthOfStudents')
      .where('student', '==', studentRef)
      // .orderBy('date', 'desc')
      .get()
      .then((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((documentSnapshot) => {
          const item = documentSnapshot.data();
          item.id = documentSnapshot.id;
          items.push(item);
        });

        resolve(items);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

export default {
  getStudentsOfParent,
  getSchedulesOfClass,
  getScoresOfStudent,
  getNotifications,
  getGeneralHealthOfStudent,
};
