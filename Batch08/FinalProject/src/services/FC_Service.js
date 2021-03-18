import firestore from '@react-native-firebase/firestore';

function getFlashCardsOfCategory(id) {
  return new Promise((resolve, reject) => {
    let catgoryRef = firestore().collection('FC-Categories').doc(id);

    firestore()
      .collection('FC-FlashCards')
      .where('category', '==', catgoryRef)
      .get()
      .then((querySnapshot) => {
        const flashcards = [];
        querySnapshot.forEach((documentSnapshot) => {
          const flashcard = documentSnapshot.data();
          flashcard.id = documentSnapshot.id;

          flashcards.push(flashcard);
        });
        resolve(flashcards);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

function getFlashCardsOfLevel(id) {
  return new Promise((resolve, reject) => {
    let levelRef = firestore().collection('FC-Levels').doc(id);

    firestore()
      .collection('FC-FlashCards')
      .where('level', '==', levelRef)
      .get()
      .then((querySnapshot) => {
        const flashcards = [];
        querySnapshot.forEach((documentSnapshot) => {
          const flashcard = documentSnapshot.data();
          flashcard.id = documentSnapshot.id;

          flashcards.push(flashcard);
        });
        resolve(flashcards);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

function getFlashCardsOfCategoryAndLevel(categoryId, levelId) {
  return new Promise((resolve, reject) => {
    let levelRef = firestore().collection('FC-Levels').doc(levelId);
    let categoryRef = firestore().collection('FC-Categories').doc(categoryId);

    firestore()
      .collection('FC-FlashCards')
      .where('level', '==', levelRef)
      .where('category', '==', categoryRef)
      .get()
      .then((querySnapshot) => {
        const flashcards = [];
        querySnapshot.forEach((documentSnapshot) => {
          const flashcard = documentSnapshot.data();
          flashcard.id = documentSnapshot.id;

          flashcards.push(flashcard);
        });
        resolve(flashcards);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

export default {
  getFlashCardsOfCategory,
  getFlashCardsOfLevel,
  getFlashCardsOfCategoryAndLevel,
};
