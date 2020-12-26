import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function FirestoreQuiz() {
  const [index, setIndex] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [questions, setQuestions] = React.useState(null);

  const getQuestions = () => {
    const data = [];
    firestore()
      .collection('Questions')
      // Sắp xếp asc / desc
      // .orderBy('name', 'asc')
      .get()
      .then((querySnapshot) => {
        // lặp qua từng document
        querySnapshot.forEach((documentSnapshot) => {
          const item = documentSnapshot.data();
          item.id = documentSnapshot.id;
          data.push(item);
        });
        // set state
        setLoading(false);
        setQuestions(data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setQuestions([]);
      });
  };

  React.useEffect(getQuestions, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {questions && (
        <View style={{ flex: 1, padding: 12 }}>
          <Text style={{ fontWeight: '700' }}>{questions[index].content}</Text>
          <View height={24} />
          {questions[index].options.map((o) => {
            return (
              <TouchableOpacity
                style={{ marginVertical: 6, padding: 12, borderColor: '#bdc3c7', borderWidth: 1 }}
                onPress={() => {
                  firestore()
                    .collection('Answers')
                    .add({
                      username: 'tungnt',
                      questionId: questions[index].id,
                      correct: o.correct,
                    })
                    .then(() => {
                      setIndex(index + 1);
                    });
                }}>
                <Text>{o.text}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </SafeAreaView>
  );
}
