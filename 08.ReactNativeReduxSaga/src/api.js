import NetworkingAxiosExamples from "../../Batch04/HelloWorldApp/session05/NetworkingAxiosExamples";

const people = [
  { name: 'Nader', age: 36 },
  { name: 'Amanda', age: 24 },
  { name: 'Jason', age: 44 }
]

export default () => {
  return new Promise((resolve, reject) => {
    // axios.post('#', {})
    // .then((response) => {
    //   resolve(response.dat)
    // })
    // .catch(ex => {
    //   reject({message: 'error', error: ex});
    // })

    setTimeout(() => {
      return resolve(people);
    }, 3000);
  });
}