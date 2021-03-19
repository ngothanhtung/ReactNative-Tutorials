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
            // GET CLASSSES
            // parent.students.forEach((s) => {
            //   const getClasses = s.class.map((studentRef) => {
            //     return studentRef.get().then((studentDocumentSnapshot) => {
            //       const student = studentDocumentSnapshot.data();
            //       student.id = studentDocumentSnapshot.id;
            //       return student;
            //     });
            //   });
            // });
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

export default {
  getStudentsOfParent,
};
