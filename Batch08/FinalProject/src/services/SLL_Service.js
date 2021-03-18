import firestore from '@react-native-firebase/firestore';

const getStudentsOfParent = (id) => {
  return new Promise((resolve, reject) => {
    firestore()
      .collection('SLL-Parents')
      .doc(id)
      .get()
      .then((documentSnapshot) => {
        if (documentSnapshot.exists) {
          let parent = documentSnapshot.data();
          parent.id = documentSnapshot.id;
          const students = [];

          // GET STUDENTS
          parent.students.forEach((studentRef) => {
            studentRef.get().then((studentDocumentSnapshot) => {
              let student = studentDocumentSnapshot.data();
              student.id = studentDocumentSnapshot.id;

              // GET CLASS
              let classRef = student.class;
              classRef.get().then((classDocumentSnapshot) => {
                let cls = classDocumentSnapshot.data();
                cls.id = classDocumentSnapshot.id;
                student.class = cls;
              });

              students.push(studentDocumentSnapshot.data());
            });
          });

          parent.students = students;

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
};

export default {
  getStudentsOfParent,
};
