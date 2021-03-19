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

          parent.students = [];

          // GET STUDENTS

          parent.students.forEach((studentRef) => {
            studentRef.get().then((studentDocumentSnapshot) => {
              const student = studentDocumentSnapshot.data();
              student.id = studentDocumentSnapshot.id;

              // GET CLASS
              const classRef = student.class;
              classRef.get().then((classDocumentSnapshot) => {
                const cls = classDocumentSnapshot.data();
                cls.id = classDocumentSnapshot.id;
                student.class = cls;
              });

              parent.students.push(student);
            });
          });

          resolve(parent);
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
