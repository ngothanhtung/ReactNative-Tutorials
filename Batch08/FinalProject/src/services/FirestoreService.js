import firestore from '@react-native-firebase/firestore';

function getVendors() {
  return new Promise((resolve, reject) => {
    firestore()
      .collection('Vendors')
      .get()
      .then((querySnapshot) => {
        const vendors = [];
        querySnapshot.forEach((documentSnapshot) => {
          const vendor = documentSnapshot.data();
          vendors.push(vendor);
        });

        resolve(vendors);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

function getServices() {
  return new Promise((resolve, reject) => {
    firestore()
      .collection('Services')
      .get()
      .then((querySnapshot) => {
        let services = [];
        querySnapshot.forEach((documentSnapshot) => {
          let service = documentSnapshot.data();
          service.id = documentSnapshot.id;
          service.vendor.get().then((vendorDocumentSnapshot) => {
            service.vendor = vendorDocumentSnapshot.data();
          });

          services.push(service);
        });

        resolve(services);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

function getService(id) {
  return new Promise((resolve, reject) => {
    firestore()
      .collection('Services')
      .doc(id)
      .get()
      .then((documentSnapshot) => {
        if (documentSnapshot.exists) {
          let service = documentSnapshot.data();
          service.id = documentSnapshot.id;
          resolve(service);
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

function getServicesOfVendor(id) {
  return new Promise((resolve, reject) => {
    const vendorRef = firestore().collection('Vendors').doc(id);

    firestore()
      .collection('Services')
      .where('vendor', '==', vendorRef)
      .get()
      .then((querySnapshot) => {
        const services = [];
        querySnapshot.forEach((documentSnapshot) => {
          const service = documentSnapshot.data();

          service.vendor.get().then((v) => {
            service.vendor = v.data();
          });

          services.push(service);
        });

        resolve(services);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

function createOrder(order) {
  return new Promise((resolve, reject) => {
    firestore()
      .collection('Orders')
      .add(order)
      .then((ref) => {
        // OK
        // TODO: Send a email to customers (THANK YOU)
        // TODO: Send notification to call center
        ref
          .get()
          .then((documentSnapshot) => {
            let createdOrder = documentSnapshot.data();
            createdOrder.id = documentSnapshot.id;
            console.log(createdOrder);
            resolve(createdOrder);
          })
          .catch((error) => {
            console.log(error);
            reject(error);
          });
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

function getStudentOfParent(id) {
  return new Promise((resolve, reject) => {
    firestore()
      .collection('SSL-Parents')
      .doc(id)
      .get()
      .then((documentSnapshot) => {
        if (documentSnapshot.exists) {
          let parent = documentSnapshot.data();
          parent.id = documentSnapshot.id;
          const students = [];

          parent.students.forEach((studentRef) => {
            studentRef.get().then((studentDocumentSnapshot) => {
              let student = studentDocumentSnapshot.data();
              student.id = studentDocumentSnapshot.id;
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
}

export default {
  getVendors,
  getServices,
  getService,
  getServicesOfVendor,

  createOrder,

  getStudentOfParent,
};
