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

export default {
  getStudentsOfParent,
  getSchedulesOfClass,
};
