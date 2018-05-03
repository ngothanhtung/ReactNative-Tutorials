import RNFirebase from 'react-native-firebase'

const configurationOptions = {
    debug: true
}
const firebase = RNFirebase.initializeApp();
export default firebase;